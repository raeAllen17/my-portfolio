export const Contact = () => {
    return (
        <section className="flex flex-col gap-10 py-16 sm:py-24">
            <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.01em]">Contact</h2>
                <p className="text-sm text-[#6b6b6b]">Say hello</p>
            </div>
            <div className="flex flex-col gap-6">
                <p className="max-w-xl text-lg leading-relaxed text-[#1a1a1a]">
                    Have a project in mind or just want to chat? Feel free to reach out.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                    <a
                        href="mailto:allenretuta10@gmail.com"
                        className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] px-4 py-2 hover:bg-[#f5f5f5] transition-colors"
                    >
                        allenretuta10@gmail.com
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact
