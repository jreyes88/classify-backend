module.exports = function(app, models)
    {
        console.log('domain controller loaded.');
        app.post('/domainSubmit', function(req, res)
            {
                models.userDomain.create(
                    {
                        domainName: req.body.domain
                    }
                )
            }
        )
    };