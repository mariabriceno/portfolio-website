// left: col-start-1 col-end-5 bg-black row-span-12
// right: col-start-5 col-end-13 row-span-11

export const SplitLayout = ({side, children}) => {
    const leftSideClasses = 'col-start-1 col-end-5 bg-black/30 row-span-12 flex flex-col justify-center'
    const rightSideClasses = 'col-start-5 col-end-13 row-span-11'

    return (
        <div className={side === 'right' ? rightSideClasses : leftSideClasses}>
            {children}
        </div>
    );
}