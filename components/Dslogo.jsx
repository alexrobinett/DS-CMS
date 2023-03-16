import { MantineProvider, createStyles, getStylesRef, rem,  Flex} from '@mantine/core';
import {
    IconDeviceTv,
  } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    Logo: {
      // subscribe to color scheme changes right in your styles
      fontSize: '2rem',
      fontWeight: '600'
    },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  
  }));



function DsLogo() {
    const { classes } = useStyles();
  return (
        <Flex 
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap">
             <span className={classes.Logo}>Digi-Sign</span>
            <IconDeviceTv className={classes.linkIcon}  stroke={2} size={36}/>
        </Flex>
        
  
    
  );
}


export {DsLogo}