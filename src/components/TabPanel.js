import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';


export default function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      style={{ marginBottom: "3rem" }}
    >
      {value === index && <Box pt = {0} p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};