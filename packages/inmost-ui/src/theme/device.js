const size = {
    xlarge: '1599px',
    large: '1199px',
    medium: '991px',
    small: '767px',
    xsmall: '575px',
    xxsmall: '480px',
    xxlargeOnly: '1700px',
    xlargeOnly: '1600px',
    largeOnly: '1200px',
    mediumOnly: '992px',
    smallOnly: '768px',
    xsmallOnly: '576px',
    xxsmallOnly: '481px'
}

const device = {
    xlarge: `(max-width: ${size.xlarge})`,
    large: `(max-width: ${size.large})`,
    medium: `(max-width: ${size.medium})`,
    small: `(max-width: ${size.small})`,
    xsmall: `(max-width: ${size.xsmall})`,
    xxsmall: `(max-width: ${size.xxsmall})`,
    xxlargeOnly: `(min-width: ${size.xxlargeOnly})`,
    xlargeOnly: `(min-width: ${size.xlargeOnly})`,
    largeOnly: `(min-width: ${size.largeOnly})`,
    mediumOnly: `(min-width: ${size.mediumOnly})`,
    smallOnly: `(min-width: ${size.smallOnly})`,
    xsmallOnly: `(min-width: ${size.xsmallOnly})`,
    xxsmallOnly: `(min-width: ${size.xxsmallOnly})`
};

export default device;