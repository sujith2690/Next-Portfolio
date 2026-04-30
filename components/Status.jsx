const status = [
    {
        num: 2,
        text: 'Years of experience'
    },
    {
        num: 26,
        text: 'Completed Projects'
    },
    {
        num: 17,
        text: 'Technologies Mastered'
    },
    {
        num: 500,
        text: '+ Code commits'
    },
]
const Status = () => {

    return (
        <section className="pb-4 pt-2 xl:pb-0 xl:pt-0">
            <div className="container mx-auto">
                <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 lg:grid-cols-4">
                    {
                        status.map((item, i) => {
                            return (
                                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl" key={i}>
                                    <span className="text-2xl font-bold text-accent xl:text-3xl">
                                        {item.num}
                                    </span>
                                    <p className="mt-2 max-w-[160px] text-sm leading-snug text-white/70">
                                        {item.text}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Status