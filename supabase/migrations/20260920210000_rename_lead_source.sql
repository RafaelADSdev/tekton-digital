-- A marca passou a se chamar Tekton Labs: o padrão da coluna acompanha o novo
-- identificador enviado pelo site. Registros antigos mantêm 'site-tekton'.
alter table public.leads alter column source set default 'site-tektonlabs';
