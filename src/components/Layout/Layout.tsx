import React, { ReactElement, ReactNode } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Sidebar from '../Sidebar/SideBar';
import Header from '../Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';

interface Props {
    children: ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  }),
);

function Layout({children}: Props): ReactElement {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header handleDrawerToggle={handleDrawerToggle} />
            <Sidebar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} /> 
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    )
}

export default Layout
