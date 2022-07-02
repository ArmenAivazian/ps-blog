import { Link, useLocation } from 'react-router-dom';

import Button, { ButtonProps } from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const NavigationLink = ({ children, href }: ButtonProps) => {
  const { pathname } = useLocation();
  const { palette } = useTheme();

  const isActive = pathname === href;
  const { primary } = palette;

  return (
    <Button
      sx={{
        color: 'common.white',
        background: isActive ? `${primary.light}!important` : 'transparent',
        fontSize: { laptop: 18, tablet: 16, mobile: 14 },
        fontWeight: 600,
        borderRadius: 0,
        '&:hover': {
          background: primary.light,
        },
        '&:first-of-type': {
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
        },
        '&:last-of-type': {
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
        },
      }}
      component={Link}
      to={href || '/'}
    >
      {children}
    </Button>
  );
};

export default NavigationLink;
