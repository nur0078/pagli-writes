interface ICardProps {
  poem: { title: string; content: string };
}

const Card = ({ poem }: ICardProps) => {
  return (
    <div className=" h-60 opacity-50 shadow-2xl text-center space-y-4 rounded-lg p-2 border-pencil border-t-4 w-80 truncate">
      <h3 className="text-xl font-bold text-center py-2"> {poem.title} </h3>
      <article
        dangerouslySetInnerHTML={{ __html: poem.content }}
        className="text-ellipsis overflow-hidden"
      />
    </div>
  );
};

export default Card;
