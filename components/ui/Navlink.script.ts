import {computed} from 'vue';
import {useRoute} from '#imports';


export type NavLinkProps = {
  link: string,
  label: string,
}

export function useNavLink (props:NavLinkProps) {
  const route = useRoute();
  
  const isActiveComputed = computed(() =>
    route.path === props.link
  );


  return {
    isActiveComputed
  }
}