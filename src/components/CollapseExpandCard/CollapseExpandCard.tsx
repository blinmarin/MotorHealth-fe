import { useState } from 'react';

import Card from '../Card';

export const CollapseExpandCard = (): React.ReactElement => {
    const [rotor, setRotor] = useState<boolean>(true);
    const [rotorWinding, setRotorWinding] = useState<boolean>(true);
    const [stator, setStator] = useState<boolean>(true);
    const [statorWinding, setStatorWinding] = useState<boolean>(true);
    const [bearing, setBearing] = useState<boolean>(true);
    const [fan, setFan] = useState<boolean>(true);
    const [shaft, setShaft] = useState<boolean>(true);

    return (
        <>
            {rotor ? (
                <Card.Card
                    className="bg-green-200 w-8 lg:p-2 h-14 cursor-pointer"
                    onClick={() => {
                        setRotor(!rotor);
                    }}
                >
                    <div className="font-bold text-lg p-1">Ротор</div>
                </Card.Card>
            ) : (
                <Card.Card
                    className="bg-green-200 w-8 lg:p-2 h-fit"
                    onClick={() => {
                        setRotor(!rotor);
                    }}
                >
                    <div className="font-bold text-lg p-1 cursor-pointer">Ротор</div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Поломка стержня беличьей клетки:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">0%</p>
                    </div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Деформация корпуса ротора:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">0%</p>
                    </div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Неравномерное вращение:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">0%</p>
                    </div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Повреждение изоляции:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">0%</p>
                    </div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Осевой сдвиг:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">0%</p>
                    </div>
                </Card.Card>
            )}

            {rotorWinding ? (
                <Card.Card
                    className="bg-red-200 w-8 lg:p-2 h-14 cursor-pointer"
                    onClick={() => {
                        setRotorWinding(!rotorWinding);
                    }}
                >
                    <div className="font-bold text-lg p-1">Обмотка ротора</div>
                </Card.Card>
            ) : (
                <Card.Card
                    className="bg-red-200 w-8 lg:p-2 h-fit"
                    onClick={() => {
                        setRotorWinding(!rotorWinding);
                    }}
                >
                    <div className="font-bold text-lg p-1 cursor-pointer">Обмотка ротора</div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Перегрев обмотки ротора:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">60%</p>
                    </div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Обрыв обмотки ротора:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">40%</p>
                    </div>
                </Card.Card>
            )}

            {stator ? (
                <Card.Card
                    className="bg-green-200 w-8 lg:p-2 h-14 cursor-pointer"
                    onClick={() => {
                        setStator(!stator);
                    }}
                >
                    <div className="font-bold text-lg p-1">Статор</div>
                </Card.Card>
            ) : (
                <Card.Card
                    className="bg-green-200 w-8 lg:p-2 h-fit"
                    onClick={() => {
                        setStator(!stator);
                    }}
                >
                    <div className="font-bold text-lg p-1 cursor-pointer">Статор</div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Повышенный нагрев активной стали статора:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">0%</p>
                    </div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Вибрация и удары в статоре:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">0%</p>
                    </div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Коррозия металлических частей статора:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">0%</p>
                    </div>
                </Card.Card>
            )}

            {statorWinding ? (
                <Card.Card
                    className="bg-green-200 w-8 lg:p-2 h-14 cursor-pointer"
                    onClick={() => {
                        setStatorWinding(!statorWinding);
                    }}
                >
                    <div className="font-bold text-lg p-1">Обмотка статора</div>
                </Card.Card>
            ) : (
                <Card.Card
                    className="bg-green-200 w-8 lg:p-2 h-fit"
                    onClick={() => {
                        setStatorWinding(!statorWinding);
                    }}
                >
                    <div className="font-bold text-lg p-1 cursor-pointer">Обмотка статора</div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Перегрев обмотки статора:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">0%</p>
                    </div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Обрыв обмотки статора:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">0%</p>
                    </div>
                </Card.Card>
            )}

            {bearing ? (
                <Card.Card
                    className="bg-red-200 w-8 lg:p-2 h-14 cursor-pointer"
                    onClick={() => {
                        setBearing(!bearing);
                    }}
                >
                    <div className="font-bold text-lg p-1">Подшипник</div>
                </Card.Card>
            ) : (
                <Card.Card
                    className="bg-red-200 w-8 lg:p-2 h-fit"
                    onClick={() => {
                        setBearing(!bearing);
                    }}
                >
                    <div className="font-bold text-lg p-1 cursor-pointer">Подшипник</div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Колебание крутящего момента:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">35%</p>
                    </div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Нагрузка на опоры:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">5%</p>
                    </div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Превышение скорости вращения:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">30%</p>
                    </div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Старение смазки:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">30%</p>
                    </div>
                </Card.Card>
            )}

            {fan ? (
                <Card.Card
                    className="bg-green-200 w-8 lg:p-2 h-14 cursor-pointer"
                    onClick={() => {
                        setFan(!fan);
                    }}
                >
                    <div className="font-bold text-lg p-1">Вентилятор</div>
                </Card.Card>
            ) : (
                <Card.Card
                    className="bg-green-200 w-8 lg:p-2 h-fit"
                    onClick={() => {
                        setFan(!fan);
                    }}
                >
                    <div className="font-bold text-lg p-1 cursor-pointer">Вентилятор</div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Засорились каналы подачи воздуха:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">0%</p>
                    </div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Загрязнена поверхность двигателя:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">0%</p>
                    </div>
                </Card.Card>
            )}

            {shaft ? (
                <Card.Card
                    className="bg-green-200 w-8 lg:p-2 h-14 cursor-pointer"
                    onClick={() => {
                        setShaft(!shaft);
                    }}
                >
                    <div className="font-bold text-lg p-1">Вал</div>
                </Card.Card>
            ) : (
                <Card.Card
                    className="bg-green-200 w-8 lg:p-2 h-fit"
                    onClick={() => {
                        setShaft(!shaft);
                    }}
                >
                    <div className="font-bold text-lg p-1 cursor-pointer">Вал</div>
                    <div className="flex space-x-8">
                        <p className="font-bold p-1 w-3/4 overflow-hidden text-base break-words whitespace-normal">
                            Намагничивание вала:
                        </p>
                        <p className="font-bold text-base p-1 w-1/4">0%</p>
                    </div>
                </Card.Card>
            )}
        </>
    );
};
