document.getElementById('saveImage').addEventListener('click', function() {
    const transactionDate = document.getElementById('transactionDate').value || "-"
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const user1 = document.getElementById('user1').value || "-";
    const amount = document.getElementById('amount').value || "-";
    const notes = document.getElementById('notes').value || "-";
 
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=674.5,height=953.5');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/Order/blob/main/am1.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 105px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">บริษัท จิงฮวด คอร์ปอเรชั่น จำกัด</p>
                <p style="position: absolute; top: 125px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">JING HUAD CORPORATION COMPANY LIMITED</p>
                <p style="position: absolute; top: 145px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">ที่ตั้งบริษัท: 33/3 หมู่ที่ 5 ตำบลราชาเทวะ อำเภอบางพลี จ.สมุทรปราการ 10</p>

                <p style="position: absolute; top: 40px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เลขที่ 12988/2567</p>     
                
                <p style="position: absolute; top: 180px; left: 500px; color:#656565; font-size: 20px; font-weight: bold;">${transactionDate}</p>     
                <p style="position: absolute; top: 218px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรื่อง: ไม่ได้บันทึกช่วยจำตามที่แจ้ง</p>     
                <p style="position: absolute; top: 250px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรียน ${accountNumber}</p>     
                
                <p style="position: absolute; top: 290px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                จากเหตุการณ์ที่สมาชิกไม่ปฏิบัติตามแผนการสั่งซื้อที่ระบบกำหนด ทำให้บริษัทได้รับความเสียหาย ทางระบบขอให้สมาชิกทำการสั่งซื้อใหม่เป็นจำนวน ${amount} บาท เพื่อสร้างกำไรกลับคืนให้กับพอร์ตของคุณ การปฏิบัติตามแผนที่กำหนดมีความสำคัญในการรักษาความสมดุลและเสถียรภาพของระบบ การไม่ปฏิบัติตามทำให้เกิดผลกระทบในวงกว้าง ทั้งต่อสมาชิกท่านอื่นและการดำเนินงานโดยรวม ดังนั้น บริษัทจึงจำเป็นต้องขอให้สมาชิกดำเนินการสั่งซื้อใหม่
                </p>     

                <p style="position: absolute; top: 430px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                แผนการซ่อมบิลของยูสเซอร์ ${user1} <br>
                รหัสแผนการสั่งซื้อใหม่หนึ่งแผนสามครั้ง(531264)<br>
                ต้องทำการสั่งซื้อสินค้าให้เสร็จภายใน 2 ชั่วโมง
                </p>     
                
                
                <p style="position: absolute; top: 520px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                ทั้งนี้ ทางบริษัท TRON SERVICE ได้วางเงินประกันจำนวนเงินไว้กับแพลตฟอร์มของเราเรียบร้อยแล้ว เพื่อรับประกันว่าสมาชิกจะได้รับเงินสำรองและค่าตอบแทนที่ครบถ้วน หากมีปัญหาเกิดขึ้น เรายินดีคืนเงินให้สมาชิกตามเงื่อนไขที่กำหนด และรับประกันรายได้ที่มั่นคง
                แผนคำสั่งซื้อใหม่ครั้งละเป็นเงิน ${amount} บาท
                </p>     


                
                <p style="position: absolute; top: 615px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                หมายเหตุ: หลังจากทำการซ่อมบิลตามที่ระบบแจ้งเรียบร้อยแล้ว สมาชิกจะได้รับเงินคืนพร้อมกำไรทั้งหมด
ภายในเวลาอันรวดเร็ว
                </p>     
                
                <p style="position: absolute; top: 730px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);">ขอแสดงความนับถือ</p>     
                <p style="position: absolute; top: 810px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);">(นายวัฒน สุนทรมั่นคงศรี)</p>                 
                <p style="position: absolute; top: 835px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 40%;">ผู้จัดการ บริษัท จิงฮวด คอร์ปอเรชั่น จำกัด</p>                 
                <p style="position: absolute; top: 860px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);">ออก ณ วันที่ ${transactionDate}</p>   
              </div>

          
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <script>
                window.onload = function() {
                    html2canvas(document.getElementById('capture')).then(canvas => {
                        document.body.appendChild(canvas);
                        const link = document.createElement('a');
                        link.download = 'output.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    });
                };
            </script>
        </body>
        </html>
    `);
});
