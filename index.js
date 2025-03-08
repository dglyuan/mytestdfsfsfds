addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    let cf = request.cf;
    let ip = "1.1.1.1"; // 

    if (cf && cf.asn) {
        let asn = cf.asn; // 
        
        if ([4134, 4837, 9808].includes(asn)) {  // 中國電信（CT）
            ip = "2.2.2.2";
        } else if ([24444, 56040, 56046].includes(asn)) {  // 中國移動（CM）
            ip = "3.3.3.3";
        } else if ([4837, 9929, 17622].includes(asn)) {  // 中國聯通（CU）
            ip = "4.4.4.4";
        }
    }

    return new Response(ip, {
        headers: { "Content-Type": "text/plain" }
    });
}
