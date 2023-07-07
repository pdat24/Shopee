import axios from "axios";
import "../common/base";
import "../common/footerScript";

// signup
(() => {
    const form = document.getElementById("signup-form");
    form?.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form.querySelector("input[name='username']").value;
        const pass = form.querySelector("input[name='password']").value;
        for (const letter of name) {
            if ((!letter.match(/[a-z]/i) && !letter.match(/[0-9]/i) && letter !== "_") || pass.includes(" ")) {
                alert("Tên đăng nhập hoặc mật khẩu không hợp lệ!");
                return;
            }
        }
        alert("Tạo tài khoản thành công!");
        setTimeout(() => {
            form.submit();
        }, 400);
    });
})();

// login
(() => {
    const form = document.getElementById("login-form");
    form?.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form.querySelector("input[name='username']").value;
        const pass = form.querySelector("input[name='password']").value;
        axios
            .post("http://localhost:8080/login", {
                username: name,
                password: pass,
            })
            .then((res) => {
                if (res.data) {
                    localStorage.setItem("userId", res.data._id);
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 400);
                } else alert("Thông tin không chính xác! Vui lòng kiểm tra lại tên và mật khẩu hoặc đăng ký mới!");
            });
    });
})();
