"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";

type FormState = { status: "idle" | "sending" | "success" | "error"; message: string };

const initialState: FormState = { status: "idle", message: "" };

export function LeadForm() {
  const [state, setState] = useState<FormState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "sending", message: "Enviando seu contexto…" });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "Não foi possível enviar sua mensagem.");

      form.reset();
      setState({
        status: "success",
        message: "Mensagem recebida. A equipe da Tekton retornará assim que possível.",
      });
    } catch (error) {
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "Não foi possível enviar sua mensagem.",
      });
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} aria-describedby="form-status">
      <div className="form-row">
        <label>
          <span>Seu nome *</span>
          <input name="name" autoComplete="name" minLength={2} maxLength={100} required />
        </label>
        <label>
          <span>E-mail profissional *</span>
          <input name="email" type="email" autoComplete="email" maxLength={180} required />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Empresa</span>
          <input name="company" autoComplete="organization" maxLength={140} />
        </label>
        <label>
          <span>Telefone</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={30} />
        </label>
      </div>

      <label>
        <span>O que vamos construir? *</span>
        <select name="service" defaultValue="" required>
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option value="landing-page">Landing page</option>
          <option value="site-institucional">Site institucional</option>
          <option value="sistema-web">Sistema ou aplicação web</option>
          <option value="a-definir">Ainda quero entender</option>
        </select>
      </label>

      <label>
        <span>Conte o contexto do projeto *</span>
        <textarea
          name="message"
          rows={5}
          minLength={20}
          maxLength={2000}
          placeholder="O que você precisa resolver, em que momento o negócio está e qual seria uma boa entrega?"
          required
        />
      </label>

      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="form-submit-row">
        <p>
          Ao enviar, você concorda com o uso dos dados para responder ao seu contato. Consulte a{" "}
          <a href="/privacidade">Política de Privacidade</a>.
        </p>
        <button className="primary-button form-button" type="submit" disabled={state.status === "sending"}>
          {state.status === "sending" ? (
            <LoaderCircle className="spin" size={18} aria-hidden="true" />
          ) : state.status === "success" ? (
            <Check size={18} aria-hidden="true" />
          ) : (
            <ArrowRight size={18} aria-hidden="true" />
          )}
          {state.status === "sending" ? "Enviando" : "Enviar briefing"}
        </button>
      </div>

      <p
        className={`form-status ${state.status === "error" ? "is-error" : ""}`}
        id="form-status"
        role="status"
        aria-live="polite"
      >
        {state.message}
      </p>
    </form>
  );
}
