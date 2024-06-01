import clsx from 'clsx';

//компонент Card для отображения информации в отдельных блоках
interface CardProps {
    className?: string;
    children: React.ReactNode;
    onClick?: ()=>void;
}

export const Card = ({ className, children, onClick }: CardProps): React.ReactElement => (
    <div className={clsx('w-full h-fit bg-white text-primary p-5 rounded-xl overflow-x-auto lg:p-7 md:w-auto', className)} onClick={onClick}>
        <div className="flex flex-col relative whitespace-nowrap space-y-6 w-fit sm:w-auto">
            {children}
        </div>
    </div>
);
