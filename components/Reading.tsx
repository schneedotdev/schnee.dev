import { books } from "@/lib/books";

const Reading = () => {
  return (
    <section className="mt-10">
      <ul className="grid gap-4 md:grid-cols-2">
        {books.map((book) => (
          <li key={book.title}>
            <article className="border-tertiary/25 flex h-full flex-col gap-4 rounded-md border bg-[#f2f2f308] p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-primary text-base">{book.title}</h2>
                  <p className="text-tertiary mt-1 text-xs">{book.author}</p>
                </div>
              </div>

              <p className="text-secondary leading-relaxed">
                {book.description}
              </p>

              <ul className="flex flex-wrap gap-2 text-xs">
                {book.tags.map((bookTag) => (
                  <li key={bookTag} className="text-tertiary">
                    <span className="text-accent">#</span>
                    {bookTag}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reading;
