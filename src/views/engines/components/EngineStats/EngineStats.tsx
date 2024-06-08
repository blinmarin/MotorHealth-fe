import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { useCallback, useState } from 'react';

import { Button } from '@/components/controls';
import Card from '@/components/Card';

import {
    StatsByTypeData,
    StatsDates,
    StatsType,
    StatsTypeHuman,
} from './data';

import type { EngineId } from '@/lib/models/engine';

type EngineStatsProps = {
    engineId: EngineId
};

export const EngineStats = ({ engineId: _engineId }: EngineStatsProps): React.ReactElement => {
    const [statsType, setStatsType] = useState<StatsType>(StatsType.Temperature);
    const [statsDates, setStatsDates] = useState<StatsDates>(StatsDates.Day);

    const handleChangeStatsType = useCallback((newStatsType: StatsType) => {
        setStatsType(newStatsType);
    }, []);

    const handleChangeStatsDates = useCallback((newStatsDates: StatsDates) => {
        setStatsDates(newStatsDates);
    }, []);

    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="flex flex-col space-y-1">
                    <Button
                        variant={statsType === StatsType.Temperature ? 'default' : 'soft'}
                        disabled={statsType === StatsType.Temperature}
                        onClick={() => handleChangeStatsType(StatsType.Temperature)}
                    >
                        Температура
                    </Button>
                    <Button
                        variant={statsType === StatsType.Vibration ? 'default' : 'soft'}
                        disabled={statsType === StatsType.Vibration}
                        onClick={() => handleChangeStatsType(StatsType.Vibration)}
                    >
                        Вибрация
                    </Button>
                    <Button
                        variant={statsType === StatsType.ElectromagneticField ? 'default' : 'soft'}
                        disabled={statsType === StatsType.ElectromagneticField}
                        onClick={() => handleChangeStatsType(StatsType.ElectromagneticField)}
                    >
                        Эл. поле
                    </Button>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart
                        data={StatsByTypeData[statsType][statsDates]}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 10,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis dataKey="value" />
                        <Tooltip />
                        <Line
                            type="natural"
                            dataKey="value"
                            name={StatsTypeHuman[statsType]}
                            stroke="#8884d8"
                            fill="#8884d8"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="flex flex-col ml-auto">
                <div className="flex flex-row space-x-1">
                    <Card.Title className="mr-4">Отобразить за:</Card.Title>
                    <Button
                        variant={statsDates === StatsDates.Day ? 'default' : 'soft'}
                        disabled={statsDates === StatsDates.Day}
                        onClick={() => handleChangeStatsDates(StatsDates.Day)}
                    >
                        День
                    </Button>
                    <Button
                        variant={statsDates === StatsDates.Week ? 'default' : 'soft'}
                        disabled={statsDates === StatsDates.Week}
                        onClick={() => handleChangeStatsDates(StatsDates.Week)}
                    >
                        Неделя
                    </Button>
                    <Button
                        variant={statsDates === StatsDates.Month ? 'default' : 'soft'}
                        disabled={statsDates === StatsDates.Month}
                        onClick={() => handleChangeStatsDates(StatsDates.Month)}
                    >
                        Месяц
                    </Button>
                </div>
            </div>
        </div>
    );
};
