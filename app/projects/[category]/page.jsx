import Work from "@/components/sections/Work"

const Projects = async ({ params }) => {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  return (
    <section className="min-h-[80vh] pt-16 pb-5 xl:pt-16 xl:pb-3">
      <div className="container mx-auto">
        <div className="mb-5 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold capitalize">
            {category} projects
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mt-1">
            Showing projects filtered by category.
          </p>
        </div>
      </div>

      <Work filterCategory={category} />
    </section>
  )
}

export default Projects
