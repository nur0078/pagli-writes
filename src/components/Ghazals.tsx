import Card from './Card';
import { Poems } from '../const/poems';

const Poem = () => {
  return (
    <div className="min-h-screen space-y-10 flex flex-col items-center">
      <h3 className="text-6xl font-bold text-center pt-10"> Ghazals </h3>
      {/* DISPLAY GRIDS */}
      <div className="flex gap-20 w-10/12 justify-center flex-wrap">
        {Poems.map((poem) => {
          return <Card poem={poem} />;
        })}
      </div>
    </div>
  );
};

export default Poem;
