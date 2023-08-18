window.onload = function(){
    var gridContainer = document.getElementById("container");
    var gridContainerPaarent = document.getElementById("game_container");
    var x_result = document.getElementById("X_turn");
    var o_result = document.getElementById("O_turn");
    var draw_result = document.getElementById("draw");

    var btn1 = document.getElementById("img_cont_1");
    var btn2 = document.getElementById("img_cont_2");
    var btn3 = document.getElementById("img_cont_3");
    var btn4 = document.getElementById("img_cont_4");
    var btn5 = document.getElementById("img_cont_5");
    var btn6 = document.getElementById("img_cont_6");
    var btn7 = document.getElementById("img_cont_7");
    var btn8 = document.getElementById("img_cont_8");
    var btn9 = document.getElementById("img_cont_9");
    
    var turn = 0;
    var x_wins = 0;
    var o_wins = 0;
    var no_win = 0;
    var restart;

    function diable_all_btn(){
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;
    }
    function enable_all_btn(){
        btn1.disabled = false;
        btn2.disabled = false;
        btn3.disabled = false;
        btn4.disabled = false;
        btn5.disabled = false;
        btn6.disabled = false;
        btn7.disabled = false;
        btn8.disabled = false;
        btn9.disabled = false;
    }
    function clear_btn_txt() {
        btn1.innerHTML = "&nbsp;";
        btn2.innerHTML = "&nbsp;";
        btn3.innerHTML = "&nbsp;";
        btn4.innerHTML = "&nbsp;";
        btn5.innerHTML = "&nbsp;";
        btn6.innerHTML = "&nbsp;";
        btn7.innerHTML = "&nbsp;";
        btn8.innerHTML = "&nbsp;";
        btn9.innerHTML = "&nbsp;";
    }

    function restart_game() {
        enable_all_btn();
        clear_btn_txt();
        turn = 0;
    }
    function exit_game() {
        if (x_wins > o_wins) {
            alert("\"X\" winns !! \nX/O : "+x_wins+"/"+o_wins);
        } else if(x_wins < o_wins) {
            alert("\"O\" winns !! \nX/O : "+x_wins+"/"+o_wins);
        } else {
            alert("Match draw");
        }
        enable_all_btn();
        clear_btn_txt();
        turn = 0;
        x_wins = 0;
        o_wins = 0;
        no_win = 0;
        x_result.innerHTML = " <b>X</b> wins  : "+x_wins;
        o_result.innerHTML = " <b>O</b> wins  : "+o_wins;
        draw_result.innerHTML = " Draws  : "+no_win;
    }

    function team_x_wins(){
        diable_all_btn();
        x_wins++;
        x_result.innerHTML = " <b>X</b> wins  : "+x_wins;
        alert("\"X\" winns !!");
        restart = confirm("Do you want to restart the game ?");
        if (restart) {
            restart_game();
        } else {
            exit_game();
        }
    }
    function team_o_wins() {
        diable_all_btn();
        o_wins++;
        o_result.innerHTML = "<b>O</b> wins  : "+o_wins;
        alert("\"O\" winns !!");
        restart = confirm("Do you want to restart the game ?");
        if (restart) {
            restart_game();
        } else {
            exit_game();
        }
    }
    function draw() {
        diable_all_btn();
        no_win++;
        draw_result.innerHTML = " Draws  : "+no_win;
        alert("Match Draw");
        restart = confirm("Do you want to restart the game ?");
        if (restart) {
            restart_game();
        } else {
            exit_game();
        }
    }

    function logic_2(){
        if (
            (btn1.innerText == "X" && btn2.innerText == "X" && btn3.innerText == "X") ||
            (btn4.innerText == "X" && btn5.innerText == "X" && btn6.innerText == "X") ||
            (btn7.innerText == "X" && btn8.innerText == "X" && btn9.innerText == "X") ||
            (btn1.innerText == "X" && btn4.innerText == "X" && btn7.innerText == "X") ||
            (btn2.innerText == "X" && btn5.innerText == "X" && btn8.innerText == "X") ||
            (btn3.innerText == "X" && btn6.innerText == "X" && btn9.innerText == "X") ||
            (btn1.innerText == "X" && btn5.innerText == "X" && btn9.innerText == "X") ||
            (btn3.innerText == "X" && btn5.innerText == "X" && btn7.innerText == "X")
            ) {
            team_x_wins();
        } else if (
            (btn1.innerText == "O" && btn2.innerText == "O" && btn3.innerText == "O") ||
            (btn4.innerText == "O" && btn5.innerText == "O" && btn6.innerText == "O") ||
            (btn7.innerText == "O" && btn8.innerText == "O" && btn9.innerText == "O") ||
            (btn1.innerText == "O" && btn4.innerText == "O" && btn7.innerText == "O") ||
            (btn2.innerText == "O" && btn5.innerText == "O" && btn8.innerText == "O") ||
            (btn3.innerText == "O" && btn6.innerText == "O" && btn9.innerText == "O") ||
            (btn1.innerText == "O" && btn5.innerText == "O" && btn9.innerText == "O") ||
            (btn3.innerText == "O" && btn5.innerText == "O" && btn7.innerText == "O")
            ) {
            team_o_wins();
        } else if (
            (btn1.innerText == "O" || btn1.innerText == "X") &&
            (btn2.innerText == "O" || btn2.innerText == "X") &&
            (btn3.innerText == "O" || btn3.innerText == "X") &&
            (btn4.innerText == "O" || btn4.innerText == "X") &&
            (btn5.innerText == "O" || btn5.innerText == "X") &&
            (btn6.innerText == "O" || btn6.innerText == "X") &&
            (btn7.innerText == "O" || btn7.innerText == "X") &&
            (btn8.innerText == "O" || btn8.innerText == "X") &&
            (btn9.innerText == "O" || btn9.innerText == "X")
        ) {
            draw();
        }
    }

    function fn_btn1(){
        if (turn == 0) {
            turn = 1;
            btn1.innerText = "X";
        } else {
            turn = 0;
            btn1.innerText = "O";
        }
        btn1.disabled = true;
        logic_2();
    }
    function fn_btn2(){
        if (turn == 0) {
            turn = 1;
            btn2.innerText = "X";
        } else {
            turn = 0;
            btn2.innerText = "O";
        }
        btn2.disabled = true;
        logic_2();
    }
    function fn_btn3(){
        if (turn == 0) {
            turn = 1;
            btn3.innerText = "X";
        } else {
            turn = 0;
            btn3.innerText = "O";
        }
        btn3.disabled = true;
        logic_2();
    }
    function fn_btn4(){
        if (turn == 0) {
            turn = 1;
            btn4.innerText = "X";
        } else {
            turn = 0;
            btn4.innerText = "O";
        }
        btn4.disabled = true;
        logic_2();
    }
    function fn_btn5(){
        if (turn == 0) {
            turn = 1;
            btn5.innerText = "X";
        } else {
            turn = 0;
            btn5.innerText = "O";
        }
        btn5.disabled = true;
        logic_2();
    }
    function fn_btn6(){
        if (turn == 0) {
            turn = 1;
            btn6.innerText = "X";
        } else {
            turn = 0;
            btn6.innerText = "O";
        }
        btn6.disabled = true;
        logic_2();
    }
    function fn_btn7(){
        if (turn == 0) {
            turn = 1;
            btn7.innerText = "X";
        } else {
            turn = 0;
            btn7.innerText = "O";
        }
        btn7.disabled = true;
        logic_2();
    }
    function fn_btn8(){
        if (turn == 0) {
            turn = 1;
            btn8.innerText = "X";
        } else {
            turn = 0;
            btn8.innerText = "O";
        }
        btn8.disabled = true;
        logic_2();
    }
    function fn_btn9(){
        if (turn == 0) {
            turn = 1;
            btn9.innerText = "X";
        } else {
            turn = 0;
            btn9.innerText = "O";
        }
        btn9.disabled = true;
        logic_2();
    }

    btn1.addEventListener("click", fn_btn1);
    btn2.addEventListener("click", fn_btn2);
    btn3.addEventListener("click", fn_btn3);
    btn4.addEventListener("click", fn_btn4);
    btn5.addEventListener("click", fn_btn5);
    btn6.addEventListener("click", fn_btn6);
    btn7.addEventListener("click", fn_btn7);
    btn8.addEventListener("click", fn_btn8);
    btn9.addEventListener("click", fn_btn9);
    
    
    // Game logic -------------------------------------------------

    // CSS logic --------------------------------------------------
    var height = gridContainerPaarent.offsetHeight;
    var width = gridContainerPaarent.offsetWidth;

    if(height < width){
        gridContainer.style.height = (height - 30)+"px";
        gridContainer.style.width = (height - 30)+"px";
        gridContainer.style.marginLeft = (width-height+30)/2+"px";
    } else {
        gridContainer.style.height = (width - 30)+"px";
        gridContainer.style.width = (width - 30)+"px";
        gridContainer.style.marginLeft = (30)/2+"px";
    }

    // -------------------------------------------------------------
}
