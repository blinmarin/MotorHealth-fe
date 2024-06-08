import dayjs from 'dayjs';

export enum StatsType {
    Temperature = 'Temperature',
    Vibration = 'Vibration',
    ElectromagneticField = 'ElectromagneticField',
}

export enum StatsDates {
    Day = 'Day',
    Week = 'Week',
    Month = 'Month',
}

type Stats = {
    name: string;
    value: number;
};

type HumanStats = {
    [K in StatsType]: string
};

export const StatsTypeHuman: HumanStats = {
    [StatsType.Temperature]: 'Температура',
    [StatsType.Vibration]: 'Вибрация',
    [StatsType.ElectromagneticField]: 'Электромагнитное поле',
};

const randomIntFromInterval = (min: number, max: number): number => (
    Math.floor(Math.random() * (max - min + 1) + min)
);

const DATES_DAY: string[] = [
    dayjs('2024-05-21T11:50:12Z').format('DD.MM hh:mm'),
    dayjs('2024-05-21T14:31:12Z').format('DD.MM hh:mm'),
    dayjs('2024-05-21T18:13:12Z').format('DD.MM hh:mm'),
    dayjs('2024-05-21T21:13:12Z').format('DD.MM hh:mm'),
];

const DATES_WEEK: string[] = [
    dayjs('2024-05-22T15:50:12Z').format('DD.MM hh:mm'),
    dayjs('2024-05-23T17:43:12Z').format('DD.MM hh:mm'),
    dayjs('2024-05-23T17:43:12Z').format('DD.MM hh:mm'),
    dayjs('2024-05-24T13:20:12Z').format('DD.MM hh:mm'),
    dayjs('2024-05-25T16:30:12Z').format('DD.MM hh:mm'),
    dayjs('2024-05-26T12:10:12Z').format('DD.MM hh:mm'),
    dayjs('2024-05-27T15:30:12Z').format('DD.MM hh:mm'),
];

const DATES_MONTH: string[] = [
    dayjs('2024-05-28T16:50:12Z').format('DD.MM hh:mm'),
    dayjs('2024-05-29T19:50:12Z').format('DD.MM hh:mm'),
    dayjs('2024-05-30T12:50:12Z').format('DD.MM hh:mm'),
    dayjs('2024-05-31T14:50:12Z').format('DD.MM hh:mm'),
    dayjs('2024-06-01T20:50:12Z').format('DD.MM hh:mm'),
    dayjs('2024-06-02T11:50:12Z').format('DD.MM hh:mm'),
    dayjs('2024-06-03T15:50:12Z').format('DD.MM hh:mm'),
    dayjs('2024-06-04T17:50:12Z').format('DD.MM hh:mm'),
    dayjs('2024-06-05T22:50:12Z').format('DD.MM hh:mm'),
    dayjs('2024-06-06T18:50:12Z').format('DD.MM hh:mm'),
    dayjs('2024-06-07T13:50:12Z').format('DD.MM hh:mm'),
    dayjs('2024-06-08T19:50:12Z').format('DD.MM hh:mm'),
];

const TEMPERATURES_DAY: Stats[] = DATES_DAY.map((date) => ({
    name: date,
    value: randomIntFromInterval(50, 130),
}));

const TEMPERATURES_WEEK: Stats[] = [
    ...TEMPERATURES_DAY,
    ...DATES_WEEK.map((date) => ({
        name: date,
        value: randomIntFromInterval(50, 130),
    })),
];

const TEMPERATURES_MONTH: Stats[] = [
    ...TEMPERATURES_WEEK,
    ...DATES_MONTH.map((date) => ({
        name: date,
        value: randomIntFromInterval(50, 130),
    })),
];

const VIBRATIONS_DAY: Stats[] = DATES_DAY.map((date) => ({
    name: date,
    value: randomIntFromInterval(0, 100),
}));

const VIBRATIONS_WEEK: Stats[] = [
    ...VIBRATIONS_DAY,
    ...DATES_WEEK.map((date) => ({
        name: date,
        value: randomIntFromInterval(0, 100),
    })),
];

const VIBRATIONS_MONTH: Stats[] = [
    ...VIBRATIONS_WEEK,
    ...DATES_MONTH.map((date) => ({
        name: date,
        value: randomIntFromInterval(0, 100),
    })),
];

const ELECTROMAGNETIC_FIELD_DAY: Stats[] = DATES_DAY.map((date) => ({
    name: date,
    value: randomIntFromInterval(0, 100),
}));

const ELECTROMAGNETIC_FIELD_WEEK: Stats[] = [
    ...ELECTROMAGNETIC_FIELD_DAY,
    ...DATES_WEEK.map((date) => ({
        name: date,
        value: randomIntFromInterval(0, 100),
    })),
];

const ELECTROMAGNETIC_FIELD_MONTH: Stats[] = [
    ...ELECTROMAGNETIC_FIELD_WEEK,
    ...DATES_MONTH.map((date) => ({
        name: date,
        value: randomIntFromInterval(0, 100),
    })),
];

type StatsByDates = {
    [K in StatsDates]: Stats[]
};

type StatsByType = {
    [K in StatsType]: StatsByDates
};

export const StatsByTypeData: StatsByType = {
    [StatsType.Temperature]: {
        [StatsDates.Day]: TEMPERATURES_DAY,
        [StatsDates.Week]: TEMPERATURES_WEEK,
        [StatsDates.Month]: TEMPERATURES_MONTH,
    },
    [StatsType.Vibration]: {
        [StatsDates.Day]: VIBRATIONS_DAY,
        [StatsDates.Week]: VIBRATIONS_WEEK,
        [StatsDates.Month]: VIBRATIONS_MONTH,
    },
    [StatsType.ElectromagneticField]: {
        [StatsDates.Day]: ELECTROMAGNETIC_FIELD_DAY,
        [StatsDates.Week]: ELECTROMAGNETIC_FIELD_WEEK,
        [StatsDates.Month]: ELECTROMAGNETIC_FIELD_MONTH,
    },
};
