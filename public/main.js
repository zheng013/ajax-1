

getcss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/style.css')  //readyState=1
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            // 虽下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
            if (request.status >= 200 && request.status < 300) {
                //创建style标签
                const style = document.createElement('style')
                //将request.response的内容放入标签内
                style.innerHTML = request.response
                //将标签插入头里
                document.head.appendChild(style)
            } else {
                alert('css加载失败')
            }
        }
    }
    request.send() //readyState=2
}


getjs.onclick = () => {
    const request = new XMLHttpRequest
    request.open("get", '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement('script')
                //创建script标签
                script.innerHTML = request.response
                //将请求后响应的内容写入标签
                document.body.appendChild(script)
                //将标签插入body里
            } else {
                alert('加载js失败')
            }
        }
    }
    request.send()
}

gethtml.onclick = () => {
    const request = new XMLHttpRequest
    request.open("get", "/3.html")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                alert('加载html失败')
            }
        }
    }
    request.send()
}

getxml.onclick = () => {
    const request = new XMLHttpRequest
    request.open('get', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                //ajax 是专门为xml设计的技术，自动生成一个可调用的对象
                const text = dom.getElementsByTagName("warning")[0].textContent
                console.log(text.trim())
            } else {
                alert('加载xml失败')
            }
        }
    }
    request.send()
}

getjson.onclick = () => {
    const request = new XMLHttpRequest
    request.open('get', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(typeof request.response);
                console.log(request.response);
                const bool = JSON.parse(request.response);
                console.log(typeof bool);
                console.log(bool);
            } else {
                alert('加载json失败')
            }
        }
    }
    request.send()
}

let n = 1
getpage.onclick = () => {
    const request = new XMLHttpRequest
    request.open('get', `/page${n + 1}`)
    console.log(request.response)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    pages.appendChild(li)
                });
                n += 1
            } else {
                // alert('加载分页失败')
                document.getElementById("getpage").disabled = true; //按钮禁用
            }
        }
    }
    request.send()
}

