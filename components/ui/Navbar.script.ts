export function useNavbar () {

  const navJson = [
    {
      slug: 'Mon espace',
      pages: [
        {
          label: 'Taches',
          to: '/',
        },
        {
          label: 'Notes',
          to: '/todo',
        },
        {
          label: 'Habitudes',
          to: '/todo',
        },
        {
          label: 'Calendrier',
          to: '/todo',
        },
        {
          label: 'Statistiques',
          to: '/todo',
        },
      ]
    }
  ];


  return {
    navJson
  }
}