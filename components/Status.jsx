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
        <section className="pt-2 pb-4 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none ">
                    {
                        status.map((item, i) => {
                            return (
                                <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={i}>
                                    <span className="text-4xl xl:text-6xl font-extrabold">
                                        {item.num}
                                    </span>
                                    <p className={`${item.text.length < 15 ? "max-w-[100px] " : "max-w-[150px]"} leading-snug text-white/80`} >
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