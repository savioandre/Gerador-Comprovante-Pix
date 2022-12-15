document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (i) => {
        i.preventDefault();
    })
});

function IdGenerator() {
    var chars = "01234567890123456789abcdef01234567890123456789ghijkl01234567890123456789mnopqr01234567890123456789stuvwx01234567890123456789yzABCDEFGHIJLMNOPQRSTUVWXYZ01234567890123456789";
    var passwordLength = 32;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password
};

function Data() {
    const Data = new Date;
    let Month = new Intl.DateTimeFormat('pt-BR', {month: "short"}).format(new Date("1-1-2021")).replace(/['.]/g, '')
    const TimeDate = `${Data.getDate().toString()} ${Month.toUpperCase()} ${Data.getFullYear().toString()}`;
    const TimeHour = `${Data.getHours()}:${Data.getMinutes()}:${Data.getSeconds()}`;
    const FormatDate = `${TimeDate} - ${TimeHour}`;
    return FormatDate
};

document.querySelector('form.formulario').addEventListener('submit', () => {

    //*** DESTINATÁRIO ***
    //** Get NAME **
    let getNameD = document.querySelector('#name-u').value;
    getNameD.toTo
    document.querySelector('#name-orig').innerHTML = getNameD;

    //** Get Value **
    let getValue = document.querySelector('#value-u').value;
    document.querySelector('#value').innerHTML = getValue;

    //** Get CPF **
    let getCpf = document.querySelector('#cpf-i').value;
    getCpf.trim();
    parseInt(getCpf);
    let formatedCpf = `${getCpf.slice(3, 6)}.${getCpf.slice(6, 9)}`;
    document.querySelector('#cpf').innerHTML = formatedCpf;

    //** Get Agency **
    let getAgencyR = document.querySelector('#agency-u').value;
    document.querySelector('#agn-origin').innerHTML = getAgencyR;

    //** Get Account **
    let getAccountR = document.querySelector('#account-u').value;
    document.querySelector('#orig-account').innerHTML = getAccountR;

    // **************** REMETENTE ****************
    //** Get NAME **
    let getNameR = document.querySelector('#name-i').value;
    document.querySelector('#name-des').innerHTML = getNameR;

    //** Get Agency **
    let getAgency = document.querySelector('#agency-i').value;
    document.querySelector('#agn').innerHTML = getAgency;

    //** Get Account **
    let getAccount = document.querySelector('#account-i').value;
    document.querySelector('#cnt').innerHTML = getAccount;

    //** Get Insti **
    let getInsti = document.querySelector('#inst-i').value;
    document.querySelector('#bco').innerHTML = getInsti;

    //** Get Type Account **
    let getType = document.querySelector('#type-i').value;
    document.querySelector('#sel-tp').innerHTML = getType;

    document.querySelector('.sub-data').innerHTML = Data();
    document.querySelector('#id').innerHTML = IdGenerator();

    // ** Change Layout **
    document.querySelector('.data').setAttribute('style', 'display: none');
    document.querySelector('.layout').removeAttribute('style');
});

document.querySelector('form#init-selt').addEventListener('submit', () => {
    document.querySelector('.init-sel').setAttribute('style', 'display: none');
    document.querySelector('.formulario').setAttribute('style', 'display: default');
});

document.querySelectorAll('input[type="radio"]').forEach((i) => {
    i.addEventListener('click', () => {
        document.querySelector('#i-bb').removeAttribute('style');
        document.querySelector('#i-nu').removeAttribute('style');

        i.closest('label').setAttribute('style', 'border: 2px solid #3cafe7;');
    })
});