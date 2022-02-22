import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import { subYears, isBefore, isSameDay, addDays } from 'date-fns';

import { Container } from './styles';

type HeatMapValue = {
  date: Date;
  count: number;
};

const RandomCalendar = () => {
  const startDate = subYears(new Date(), 1); // subYears, subtrai anos, no nosso caso 1 ano
  const endDate = new Date();

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatMapValues(startDate, endDate)}
          gutterSize={3.5} // tamanho dos quadrados de data do calendar
          // Escala de valores com a  ajuda das cores
          classForValue={(item: HeatMapValue) => {
            let clampedCount = 0; // Valor usado para limitar o valor das cores, pois não existe mais cores que 04 no root

            if (item !== null) {
              clampedCount = Math.max(item.count, 0); // Math.max, não pode ser menor que 0, se contribui -3 (impossível), vai p 0
              clampedCount = Math.min(item.count, 4); // Math.min, não pode ser amior do que 4, se contribui 9, vai p 4
            }

            return `scale-${clampedCount}`;
          }}
          showWeekdayLabels
        />
      </div>

      <span>Random Calendar (do not represent actual data)</span>
    </Container>
  );
};

const generateHeatMapValues = (startDate: Date, endDate: Date) => {
  const values: HeatMapValue[] = [];

  let currentDate = startDate;

  // Enquanto o dia atual não for maior queo dia de fim, fazer o loop, ou seja, até chegar ao final do calendar
  // Ou se o dia atual for o mesmo dia do dia final, ou seja, chegou no final ... Mantenha o looping
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 4; // Gerar um número aleatório entre 0 e 4

    values.push({
      date: currentDate,
      count: Math.floor(count), // Math.floor, arredonda para baixo
    });

    currentDate = addDays(currentDate, 1); // Adiciona 1 dia ao dia atual, par a adata atual ir passando do dia atual para o próximo
  }

  return values;
};

export default RandomCalendar;
