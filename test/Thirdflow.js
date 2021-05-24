module.exports={
    '@tags': ['google'],
    'Thirdtest flow': function (browser){

        const mainQuery = '[name="as_q"]';
        const mainInput = 'Elon Musk';
        const langdropdown = '#lr_button';
        const selectlang = '.goog-menuitem[value="lang_it"]';
        const lastupdate = '#as_qdr_button';
        const lastupdateselect = '.goog-menuitem[value="m"]';
        const submitButton = '.jfk-button[type="submit"]';


        browser
        .url('https://www.google.com/advanced_search')
        .setValue(mainQuery, mainInput)
        .pause(3000)
        .click(langdropdown)
        .click(selectlang)
        .click(lastupdate)
        .click(lastupdateselect)
        .click(submitButton)
        .saveScreenshot('tests_output/google.png')
        .pause(3000)

        .end();
    }
}