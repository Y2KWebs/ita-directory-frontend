import React, {useState, useRef, useEffect} from "react";
import * as echarts from "echarts";
import _ from "lodash";
import {groupByTypeYear, groupByTypeMonth, daysBetween} from "utils/generateData";
import {
	Card,
	CardHeader,
	CardTitle,
	CardSelector,
	Chart,
	CardSelectorWrapper,
	CardOpenModal,
} from "./BarChart.styles";
import {options, allMonths, returnMonthsData, optionsSelectMonth} from "./defaultOptions";
import {faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getMonthLength, startingCutPerMonth, startingCutPerYear} from "utils/generalFilter";

function BarChart({data, hideModal, active, size}) {
	const chartRef = useRef(null); // Creo una referencia y la inicializo vacia.
	const [curChart, setCurChart] = useState(undefined); // Creo una variable de estado y la inicializo sin definir.

	useEffect(() => {
		if (chartRef !== null && curChart === undefined) {
			setCurChart(echarts.init(chartRef.current));
		}
		// eslint-disable-next-line
	}, [chartRef]);

	const [selectedYear, setSelectedYear] = useState("2016");
	const [selectedMonth, setSelectedMonth] = useState("all");

	const returnOptionsSelectYear = (startYear, lastYear) => {
		const years = [];

		let yearsDifference = lastYear - startYear + 1;

		for (let i = 0; i < yearsDifference; i++) {
			years.push(
				<option key={parseInt(startYear) + i} value={parseInt(startYear) + i}>
					{parseInt(startYear) + i}
				</option>
			);
		}
		return years;
	};
	const optionsSelectYear = returnOptionsSelectYear(
		data[0].day.getFullYear(),
		data[data.length - 1].day.getFullYear()
	);

	// Set graph options and data based on filters
	useEffect(() => {
		if (curChart !== undefined) {
			let customOptions;

			let yearToFilterLength = daysBetween(`${selectedYear}-01-01`, `${selectedYear}-12-31`);
			const startingCut = startingCutPerYear(data[0].day, parseInt(selectedYear));
			const yearToFilterData = data.slice(
				parseInt(startingCut),
				parseInt(startingCut) + parseInt(yearToFilterLength)
			);

			let monthToFilterLength = getMonthLength(selectedYear, selectedMonth);
			const corteInicialMes = startingCutPerMonth(
				parseInt(selectedYear),
				parseInt(selectedMonth)
			);
			const monthToFilterData = yearToFilterData.slice(
				parseInt(corteInicialMes),
				parseInt(corteInicialMes) + parseInt(monthToFilterLength)
			);

			if (selectedMonth === "all") {
				customOptions = groupByTypeYear(yearToFilterData);
			} else {
				customOptions = groupByTypeMonth(monthToFilterData);
			}

			options.series = _.merge(options.series, customOptions);
			options.xAxis[0].data =
				selectedMonth === "all"
					? returnMonthsData(allMonths, "shortName")
					: [returnMonthsData(allMonths, "shortName")[selectedMonth]];

			curChart.setOption({...options});
		}
		// eslint-disable-next-line
	}, [curChart, selectedMonth, selectedYear, data]);

	const resizeChart = () => {
		curChart.resize();
	};

	// Resize the chart when window resizes
	useEffect(() => {
		if (curChart !== undefined) {
			window.addEventListener("resize", resizeChart);
			return () => {
				window.removeEventListener("resize", resizeChart);
			};
		}
		// eslint-disable-next-line
	}, [curChart, size]);

	// handlers
	const handleYearChange = (e) => {
		setSelectedYear(e.target.value);
	};

	const handleMonthChange = (e) => {
		setSelectedMonth(e.target.value);
	};

	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle> Ventas del año {selectedYear} </CardTitle>
					<CardSelectorWrapper>
						<CardSelector defaultValue={selectedMonth} onChange={handleMonthChange}>
							<option value="all">All</option>
							{optionsSelectMonth}
						</CardSelector>
						<CardSelector defaultValue={selectedYear} onChange={handleYearChange}>
							{optionsSelectYear}
						</CardSelector>
						<CardOpenModal onClick={hideModal}>
							<FontAwesomeIcon icon={active ? faTimes : faExternalLinkAlt} />
						</CardOpenModal>
					</CardSelectorWrapper>
				</CardHeader>
				{active ? (
					<Chart
						style={{width: `${size[0]}px`, height: `${size[1]}px`}}
						ref={chartRef}
					></Chart>
				) : (
					<Chart ref={chartRef}></Chart>
				)}
			</Card>
		</>
	);
}

export default BarChart;
