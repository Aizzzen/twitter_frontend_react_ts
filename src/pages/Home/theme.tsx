import {colors, makeStyles, Theme} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

export const useStylesHomeStyle = makeStyles((theme: Theme) => ({
    centered: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36
    },
    navbarList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230,
    },
    navbarListItem: {
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        },
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                }
            }
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 15,
            transition: 'background-color .1s ease-in-out',
        }
    },
    navbarListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15
    },
    navbarListItemIcon: {
        fontSize: 32,
        marginLeft: -5,
    },
    navbarTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2),
    },
    tweetsWrapper: {
        minHeight: '100vh',
        borderRadius: 0,
        borderTop: 0,
        borderBottom: 0,
    },
    tweetsCentred: {
        marginTop: 50,
        textAlign: 'center',
    },
    tweetsHeader: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        borderRadius: 0,
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        }
    },
    tweetsHeaderUser: {
        display: 'flex',
        alignItems: 'center',
    },
    // tweetsHeaderBackButton: {
    //     marginRight: 30
    // },
    tweet: {
        display: 'flex',
        cursor: 'pointer',
        padding: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        }
    },
    tweetWrapper: {
        color: 'inherit',
        textDecoration: 'none',
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: 15,
    },
    tweetHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    tweetContent: {
        flex: 1
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        maxWidth: 450,
    },
    tweetUserName: {
        color: grey[500]
    },
    fullTweet: {
        padding: 22,
        paddingBottom: 0,
    },
    fullTweetText: {
        fontSize: 24,
        marginTop: 20,
        marginBottom: 20,
        lineHeight: 1.3125,
        wordBreak: 'break-word',
    },
    fullTweetFooter: {
        margin: '0 auto',
        borderTop: '1px solid #E6ECF0',
        left: 0,
        maxWidth: '100%',
        justifyContent: 'space-around',
        padding: '2px 0',
        marginTop: 20,
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        }
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        }
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    sideProfile: {
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        bottom: 30,
        padding: '10px 15px',
        width: 260,
        borderRadius: 50,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: colors.lightBlue[50],
        },
    },
    sideProfileInfo: {
        flex: 1,
        marginLeft: 10,
        '& b': {
            fontSize: 16,
        },
    },
    profileMenu: {
        bottom: '110px !important',
        width: '250px !important',
        left: '17.5% !important',
        top: 'auto !important',
        boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.08)',
        borderRadius: 20,
        border: '1px solid rgba(0, 0, 0, 0.1)',
        '& a': {
            color: 'black',
            textDecoration: 'none',
        }
    },
    mediaList: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        flexWrap: 'wrap',
    },
    mediaListItem: {
        width: 50,
        height: 50,
        overflow: 'hidden', // чтобы содержимое не выхлдило за пределы блока
        // borderRadius: 6,
        marginRight: 10,
        marginBottom: 10,
        position: 'relative',
        '& img': {
            width: '100%',
            height: '100%',
            'object-fit': 'cover,'
        },
        '& svg path': {
            fill: 'white'
        }
    },
    mediaListItemRemove: {
        // position: 'relative',
        position: 'absolute',
        top: 1,
        // top: -4,
        right: 1,
        // right: -35,
        padding: '0 !important',
        backgroundColor: '#ff4d4d !important',
    },
}))
