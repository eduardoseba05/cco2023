function verificar_fut() {
    var sofridos = Number(ipt_sofridos.value);
    var feitos = Number(ipt_feitos.value);
    var vitoria = feitos - sofridos
    var derrota = sofridos - feitos
    var diferenca = vitoria || derrota

    if (sofridos > feitos && derrota > 6) {
        msg.innerHTML = `SEU TIME ESTÁ COM RENDIMENTO PÉSSIMO!`
    }
    if (feitos > sofridos && vitoria > 6) {
        msg.innerHTML = `PARABÉNS, SEU TIME ESTÁ COM RENDIMENTO ÓTIMO!`
    }

    if (sofridos > feitos && derrota >= 4 && derrota < 6) {
        msg.innerHTML = `SEU TIME ESTÁ COM RENDIMENTO RUIM!`
    }
    if (feitos > sofridos && vitoria >= 4 && vitoria < 6) {
        msg.innerHTML = `PARABÉNS, SEU TIME ESTÁ COM RENDIMENTO BOM`
    }

    if (sofridos > feitos && derrota >= 2 && derrota < 4) {
        msg.innerHTML = `SEU TIME ESTÁ COM UM RENDIMENTO NÃO MUITO BOM MAS ESTÁ PRÓXIMO DA VITÓRIA!`
    }
    if (feitos > sofridos && vitoria >= 2 && vitoria < 4) {
        msg.innerHTML = `VITÓRIA SOFRIDA, O TIME ESTÁ COM UM RENDIMENTO NÃO MUITO BOM MAS CONTINUA VITORIOSO!`
    }

    if (feitos == sofridos) {
        msg.innerHTML = `OS TIMES EMPATARAM E JOGARAM DE IGUAL PARA IGUAL!`
    }
}

function verificar_soc() {
    var sofridos = Number(ipt_sofridos.value);
    var feitos = Number(ipt_feitos.value);
    var vitoria = feitos - sofridos
    var derrota = sofridos - feitos
    var diferenca = vitoria || derrota

    if (sofridos > feitos && derrota > 5) {
        msg.innerHTML = `SEU TIME ESTÁ COM RENDIMENTO PÉSSIMO!`
    }
    if (feitos > sofridos && vitoria > 5) {
        msg.innerHTML = `PARABÉNS, SEU TIME ESTÁ COM RENDIMENTO ÓTIMO!`
    }

    if (sofridos > feitos && derrota >= 3 && derrota < 5) {
        msg.innerHTML = `SEU TIME ESTÁ COM RENDIMENTO RUIM!`
    }
    if (feitos > sofridos && vitoria >= 3 && vitoria < 5) {
        msg.innerHTML = `PARABÉNS, SEU TIME ESTÁ COM RENDIMENTO BOM`
    }

    if (sofridos > feitos && derrota >= 1 && derrota < 3) {
        msg.innerHTML = `SEU TIME ESTÁ COM UM RENDIMENTO NÃO MUITO BOM MAS ESTÁ PRÓXIMO DA VITÓRIA!`
    }
    if (feitos > sofridos && vitoria >= 1 && vitoria < 3) {
        msg.innerHTML = `VITÓRIA SOFRIDA, O TIME ESTÁ COM UM RENDIMENTO NÃO MUITO BOM MAS CONTINUA VITORIOSO!`
    }

    if (feitos == sofridos) {
        msg.innerHTML = `OS TIMES EMPATARAM E JOGARAM DE IGUAL PARA IGUAL!`
    }
}

function verificar_cam() {
    var sofridos = Number(ipt_sofridos.value);
    var feitos = Number(ipt_feitos.value);
    var vitoria = feitos - sofridos
    var derrota = sofridos - feitos
    var diferenca = vitoria || derrota

    if (sofridos > feitos && derrota > 4) {
        msg.innerHTML = `SEU TIME ESTÁ COM RENDIMENTO PÉSSIMO!`
    }
    if (feitos > sofridos && vitoria > 4) {
        msg.innerHTML = `PARABÉNS, SEU TIME ESTÁ COM RENDIMENTO ÓTIMO!`
    }

    if (sofridos > feitos && derrota >= 2 && derrota < 3) {
        msg.innerHTML = `SEU TIME ESTÁ COM RENDIMENTO RUIM!`
    }
    if (feitos > sofridos && vitoria >= 2 && vitoria < 3) {
        msg.innerHTML = `PARABÉNS, SEU TIME ESTÁ COM RENDIMENTO BOM`
    }

    if (sofridos > feitos && derrota >= 1 && derrota < 2) {
        msg.innerHTML = `SEU TIME ESTÁ COM UM RENDIMENTO NÃO MUITO BOM MAS ESTÁ PRÓXIMO DA VITÓRIA!`
    }
    if (feitos > sofridos && vitoria >= 1 && vitoria < 2) {
        msg.innerHTML = `VITÓRIA SOFRIDA, O TIME ESTÁ COM UM RENDIMENTO NÃO MUITO BOM MAS CONTINUA VITORIOSO!`
    }

    if (feitos == sofridos) {
        msg.innerHTML = `OS TIMES EMPATARAM E JOGARAM DE IGUAL PARA IGUAL!`
    }
}
