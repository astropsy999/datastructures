import Title from "app/components/common/typografy/title";
import Subtitle from "app/components/common/typografy/subtitle";
import SmallTitle from "app/components/common/typografy/smallTitle";
import Text from "app/components/common/typografy/text";
import { CodeBlock, dracula } from "react-code-blocks";
import diagram from "app/assets/img/diagrams/One-To-Many.jpg";
import {
    adressesExampleDenormalized,
    adressesExampleNormalized,
    publisherExampleDenormalized,
    publisherExampleNormalizedByPublisher,
    publisherExampleNormalizedByBook
} from "./examples";
import React from "react";
const OneToManyPage = () => {
    return (
        <>
            <Title>One-to-Many</Title>
            <Text>Один до багатьох</Text>
            <SmallTitle>Навіщо</SmallTitle>
            <Text>- Збільшення продуктивності</Text>
            <Text>- Узгодженість даних</Text>

            <Subtitle>Приклад 1. Адреси</Subtitle>
            <SmallTitle>1. Денормалізовані дані</SmallTitle>
            <CodeBlock
                text={adressesExampleDenormalized}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <SmallTitle>2. Нормалізовані дані</SmallTitle>
            <CodeBlock
                text={adressesExampleNormalized}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <Subtitle>Приклад 2. Видавець</Subtitle>
            <SmallTitle>1. Денормалізовані дані</SmallTitle>
            <CodeBlock
                text={publisherExampleDenormalized}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <SmallTitle>2. Нормалізовані дані за Видавцем</SmallTitle>
            <CodeBlock
                text={publisherExampleNormalizedByPublisher}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <SmallTitle>3. Нормалізовані дані по Книзі</SmallTitle>
            <CodeBlock
                text={publisherExampleNormalizedByBook}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <SmallTitle>Плюси цієї структури</SmallTitle>
            <Text>
                - Отримання дочірніх елементів без додаткового запиту до БД
            </Text>
            <br />
            <img
                src={diagram}
                style={{
                    width: "100%",
                    borderRadius: "10px"
                }}
            />
        </>
    );
};

export default OneToManyPage;
