import {
  CSS,
  HTML,
  FIGMA,
  GIT,
  JS,
  MONGO_DB,
  MY_SQL,
  NEXT_JS,
  NODE_JS,
  REACT,
  TAILWIND,
  TS,
  SVELTE,
} from '@/assets';

const techs = [
  { name: 'HTML', icon: HTML },
  { name: 'CSS', icon: CSS },
  { name: 'JavaScript', icon: JS },
  { name: 'TypeScript', icon: TS },
  { name: 'React', icon: REACT },
  { name: 'Svelte', icon: SVELTE },
  { name: 'TailwindCSS', icon: TAILWIND },
  { name: 'Git', icon: GIT },
  { name: 'MongoDB', icon: MONGO_DB },
  { name: 'MySQL', icon: MY_SQL },
  { name: 'Next', icon: NEXT_JS },
  { name: 'Node', icon: NODE_JS },
  { name: 'Figma', icon: FIGMA },
];

export const Technologies = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 mt-[5svh] md:mt-0">
      {techs.map(({ icon: Icon, name }) => (
        <div
          key={name}
          className="flex flex-col items-center justify-center backdrop-blur-2xl gap-2 size-24 2xl:size-28 3xl:size-32  rounded-2xl shadow-lg hover:scale-110   transition-all duration-200 ease-in-out "
        >
          <Icon className="text-accent-foreground size-7 2xl:size-10" />
          <span className="text-sm font-medium text-center ">{name}</span>
        </div>
      ))}
    </div>
  );
};
