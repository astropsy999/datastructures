/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Title from "app/components/common/typografy/title";
import Subtitle from "app/components/common/typografy/subtitle";
import Text from "app/components/common/typografy/text";
import { CodeBlock, dracula } from "react-code-blocks";
import { example1Part1, example1Part2 } from "./codeExamples";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import diagram1 from "app/assets/img/diagrams/DeNormalized.jpg";
import diagram2 from "app/assets/img/diagrams/Normalized.jpg";
import SmallTitle from "app/components/common/typografy/smallTitle";
import Divider from "app/components/common/divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function createData(name, norm, denorm) {
    return { name, norm, denorm };
}

const rows = [
    createData(
        "Обсяг даних",
        <KeyboardArrowDownIcon style={{ color: "green" }} />,
        <KeyboardArrowUpIcon style={{ color: "red" }} />
    ),
    createData(
        "Швидкість отримання даних",
        <KeyboardArrowDownIcon style={{ color: "red" }} />,
        <KeyboardArrowUpIcon style={{ color: "green" }} />
    ),
    createData(
        "Неузгодженість даних",
        <KeyboardArrowDownIcon style={{ color: "green" }} />,
        <KeyboardArrowUpIcon style={{ color: "red" }} />
    ),
    createData(
        "Простота запита",

        <KeyboardArrowDownIcon style={{ color: "red" }} />,
        <KeyboardArrowUpIcon style={{ color: "green" }} />
    ),
    createData(
        "Витрати на Update/Put",
        <KeyboardArrowDownIcon style={{ color: "green" }} />,
        <KeyboardArrowUpIcon style={{ color: "red" }} />
    ),
    createData(
        <>
            Складність коду для <br /> роботи зі схемою
        </>,
        <KeyboardArrowDownIcon style={{ color: "green" }} />,
        <KeyboardArrowUpIcon style={{ color: "red" }} />
    ),
    createData(
        "Целостность данных",
        <KeyboardArrowDownIcon style={{ color: "red" }} />,
        <KeyboardArrowUpIcon style={{ color: "green" }} />
    )
];
const Main = () => {
    return (
        <>
            <Title>Структури даних</Title>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Надмірність даних</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Надмірність даних - це умова, що створюється в базі
                        даних або технології зберігання даних, при якій той
                        самий фрагмент даних зберігається у двох різних місцях.
                        <br />
                        Це може означати два різні поля в одній базі даних або
                        два різні місця в кількох програмних середовищах або
                        платформах. Щоразу, коли дані повторюються, це є
                        надмірність даних.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Узгодженість даних</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Узгодженість даних означає, чи збігаються одні й ті ж
                        дані, що зберігаються в різних місцях.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Divider />
            <Subtitle>Денормалізація</Subtitle>
            <Text>
                Денормалізація - це метод, який використовується під час
                проектування у базі даних. Він використовується для додавання
                надмірності швидкого виконання запиту. Це метод, у якому дані
                об'єднуються.
            </Text>

            <SmallTitle>Характеристики</SmallTitle>
            <Stack
                direction="row"
                spacing={1}
                style={{ margin: "10px 0 20px" }}
            >
                <Chip
                    label="Швидкість обробки запиту"
                    variant="outlined"
                    icon={<KeyboardArrowUpIcon style={{ color: "green" }} />}
                />
                <Chip
                    label="Кількість сутностей"
                    variant="outlined"
                    icon={<KeyboardArrowDownIcon style={{ color: "green" }} />}
                />
                <Chip
                    label="Надмірність даних"
                    variant="outlined"
                    icon={<KeyboardArrowUpIcon style={{ color: "red" }} />}
                />
                <Chip
                    label="Узгодженість даних"
                    variant="outlined"
                    icon={<KeyboardArrowDownIcon style={{ color: "red" }} />}
                />
            </Stack>
            <SmallTitle>Приклад</SmallTitle>
            <CodeBlock
                text={example1Part1}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <SmallTitle>Логіка процесу запиту даних</SmallTitle>
            <img
                src={diagram1}
                style={{
                    width: "100%",
                    borderRadius: "10px"
                }}
            />
            <Divider />
            <Subtitle>Нормалізація</Subtitle>
            <Text>
                Нормалізація - це метод, який використовується в базі даних для
                зменшення надмірності та неузгодженості даних. Це метод, при
                якому дані без надмірності та несуперечності зберігаються у
                встановленій схемі.
            </Text>
            <SmallTitle>Характеристики</SmallTitle>
            <Stack
                direction="row"
                spacing={1}
                style={{ margin: "10px 0 20px" }}
            >
                <Chip
                    label="Швидкість обробки запиту"
                    variant="outlined"
                    icon={<KeyboardArrowDownIcon style={{ color: "red" }} />}
                />
                <Chip
                    label="Кількість сутностей"
                    variant="outlined"
                    icon={<KeyboardArrowUpIcon style={{ color: "red" }} />}
                />
                <Chip
                    label="Надмірність даних"
                    variant="outlined"
                    icon={<KeyboardArrowDownIcon style={{ color: "green" }} />}
                />
                <Chip
                    label="Узгодженість даних"
                    variant="outlined"
                    icon={<KeyboardArrowUpIcon style={{ color: "green" }} />}
                />
            </Stack>
            <SmallTitle>Приклад</SmallTitle>
            <CodeBlock
                text={example1Part2}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <SmallTitle>Логіка процесу запиту даних</SmallTitle>
            <img
                src={diagram2}
                style={{
                    width: "100%",
                    borderRadius: "10px"
                }}
            />
            <Divider />
            <Subtitle>Порівняння</Subtitle>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Параметр</TableCell>
                            <TableCell align="center">Normalization</TableCell>
                            <TableCell align="center">
                                Denormalization
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0
                                    }
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.norm}</TableCell>
                                <TableCell align="center">
                                    {row.denorm}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Main;
