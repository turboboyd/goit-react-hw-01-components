import PropTypes from 'prop-types';
import {
  Title,
  Section,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';
export const Statistics = (data) => { 
  const stats = data.stats;
  return (
    <Section>
      {data.title && <Title>{data.title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
