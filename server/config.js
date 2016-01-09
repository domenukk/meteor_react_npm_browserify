/**
 * Created by dmnk on 13.12.2015.
 */

socialConfig = () => {
    ServiceConfiguration.configurations.remove({
        service: 'facebook'
    });

    ServiceConfiguration.configurations.insert({
        service: 'facebook',
        appId: 'APP_ID',
        secret: 'APP_SECRET'
    });
};
socialConfig();