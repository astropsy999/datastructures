/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Subtitle from "app/components/common/typografy/subtitle";
import { CodeBlock, dracula } from "react-code-blocks";
import {
    oneToOneExample1Part1,
    oneToOneExample1Part2,
    oneToOneExample2Part1,
    oneToOneExample2Part2
} from "./examples";
import Title from "app/components/common/typografy/title";
import SmallTitle from "app/components/common/typografy/smallTitle";
import Text from "app/components/common/typografy/text";

const OneToOnePage = () => {
    return (
        <>
            <Title>One-to-One</Title>
            <Text>Один до одного</Text>
            <SmallTitle>Навіщо</SmallTitle>
            <Text>
                - Поділ однієї сутності на більш використовувані та менш
                використовувані дані
            </Text>
            <Text>- Оптимізація читання та обробки даних</Text>
            <Text>
                - Оптимізація обсягу пам'яті, необхідного для роботи програми
            </Text>

            <Subtitle>Приклад 1. Адреса користувача</Subtitle>
            <SmallTitle>1. Денормалізовані дані</SmallTitle>
            <CodeBlock
                text={oneToOneExample1Part1}
                language="js"
                theme={dracula}
                wrapLines={true}
            />

            <SmallTitle>2. Нормализовані дані</SmallTitle>
            <CodeBlock
                text={oneToOneExample1Part2}
                language="js"
                theme={dracula}
                wrapLines={true}
            />

            <Subtitle>Приклад 2. Дані про фільм</Subtitle>
            <SmallTitle>1. Денормалізовані дані</SmallTitle>
            <CodeBlock
                text={oneToOneExample2Part1}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <SmallTitle>2. Нормализовані дані</SmallTitle>
            <CodeBlock
                text={oneToOneExample2Part2}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
        </>
    );
};

export default OneToOnePage;
