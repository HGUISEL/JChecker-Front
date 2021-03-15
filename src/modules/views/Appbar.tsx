import AppBar from '../components/AppbarLayout';
import { Button, Link, Theme, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import i18n, { Languages } from '../../locales/i18n';


interface Props extends WithStyles<typeof astyles> {}


const astyles = (theme: Theme) => ({
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: 'space-between',
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    langIcon: {
        marginLeft: theme.spacing(2),
    },
    left: {
        flex: 1,
    },
    logo: {
        marginTop: theme.spacing(1),
        maxWidth: "300px",
    }
});



function AppBarView (props: Props) {
    const { classes } = props;

    const handleChangeLang = (lang: Languages) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
    }

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left} />
                    <Link
                        variant="h3"
                        underline="none"
                        color="inherit"
                        href="/"
                    >
                        <img src="/static/logo.png" alt="logo" className={classes.logo} />

                    </Link>

                    <div className={classes.right}>
                        <Button className={classes.langIcon} onClick={() => handleChangeLang('ko')}>
                            <img src="/static/kor.svg" alt="kor" />
                        </Button>
                        <Button className={classes.langIcon} onClick={() => handleChangeLang('en')}>
                            <img src="/static/eng.svg" alt="eng" />
                        </Button>
                    </div>
                    
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder} />
        </div>
    );
}


export default React.memo(withStyles(astyles)(AppBarView));