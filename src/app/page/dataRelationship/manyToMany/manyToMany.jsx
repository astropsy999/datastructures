import React from "react";
import Title from "app/components/common/typografy/title";
import SmallTitle from "app/components/common/typografy/smallTitle";
import Subtitle from "app/components/common/typografy/subtitle";
import Text from "app/components/common/typografy/text";
import { CodeBlock, dracula } from "react-code-blocks";
import { overloadExampleAfter, overloadExampleBefore } from "./examples";
const ManyToManyPage = () => {
    return (
        <>
            <Title>Many-to-Many</Title>
            <Text>Багато до багатьох або Two-way-references</Text>
            <SmallTitle>Навіщо</SmallTitle>
            <Text>- Збільшення продуктивності</Text>
            <Text>- Життєво необхідні дані</Text>

            <Subtitle>Приклад 1. Книги та теги</Subtitle>
            <SmallTitle>Логіка</SmallTitle>
            <Text>
                - У кожному тезі зберігаємо посилання на всі книги, які містять
                тег.
            </Text>
            <Text>- У кожній книзі зберігаємо посилання на її теги.</Text>
            <br />
            <CodeBlock
                text={overloadExampleBefore}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <Subtitle>Приклад 2. Книги та теги. Overload</Subtitle>
            <Text>
                Overload - перевантаження, наднавантаження. В даному випадку
                мається на увазі зберігання великої кількості даних у параметрі
                певного екземпляра сутності.
            </Text>

            <SmallTitle>Умова</SmallTitle>
            <Text>- Для кожного тегу існує &gt;1000 посібників</Text>
            <br />
            <CodeBlock
                text={overloadExampleAfter}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
        </>
    );
};

export default ManyToManyPage;
