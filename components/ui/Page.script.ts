export type PageProps = {
  title?: string;
}

export function usePage (props: PageProps) {

  const titleComputed = computed(() => props.title ?? 'Titre de la page');

  return {
    titleComputed
  }
}