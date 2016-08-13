module.exports = function(app, models) {
    app.get('/:username/:title', function(req, res) {
        var paramsUser = req.params.username;
        var userID;
        var pageID;
        var paramsTitle = req.params.title;
        var hbsObj = {
            pageName: '',
            username: '',
            pOneName: '',
            pOneData: '',
            pOneDataType: '',
            pTwoName: '',
            pTwoData: '',
            pTwoDataType: '',
            pThreeName: '',
            pThreeData: '',
            pThreeDataType: '',
            pFourName: '',
            pFourData: '',
            pFourDataType: '',
        }
        models.userID.findOne({ where: { username: paramsUser } }).then(function(res) {
            userID = res.id;
            hbsObj.username = res.username;
            console.log("USER NAME!!!!!    " + hbsObj.username);
        }).then(function() {
            models.userPage.findOne({ where: { userId: userID, title: paramsTitle } }).then(function(res) {
                pageID = res.id;
                hbsObj.pageName = res.title;
            }).then(function() {
                models.userContent.findOne({ where: { pageId: pageID, pagePosition: 1 } }).then(function(res) {
                    hbsObj.pOneName = res.name;
                    hbsObj.pOneData = res.data;
                    hbsObj.pOneDataType = res.dataType;
                }).then(function() {
                    models.userContent.findOne({ where: { pageId: pageID, pagePosition: 2 } }).then(function(res) {
                        hbsObj.pTwoName = res.name;
                        hbsObj.pTwoData = res.data;
                        hbsObj.pTwoDataType = res.dataType;
                    }).then(function() {
                        models.userContent.findOne({ where: { pageId: pageID, pagePosition: 3 } }).then(function(res) {
                            hbsObj.pThreeName = res.name;
                            hbsObj.pThreeData = res.data;
                            hbsObj.pThreeDataType = res.dataType;
                        }).then(function() {
                            models.userContent.findOne({ where: { pageId: pageID, pagePosition: 4 } }).then(function(res) {
                                hbsObj.pFourName = res.name;
                                hbsObj.pFourData = res.data;
                                hbsObj.pFourDataType = res.dataType;
                            }).then(function() {
                                console.log(hbsObj);
                                res.render('student', hbsObj);
                            })
                        })
                    })
                })
            })
        })

    });
};
