export default function ApiList() {
    
    
    // let baseUrl = "http://192.168.0.240:30"

    let baseUrl = "http://203.129.217.245:80"    //Public API

    let apiList = {

        viewAllPaymentTransactions: `${baseUrl}/api/view-razorpay-payment-data`,
        applyPdfView: `${baseUrl}/api/pdfview`,
        generateOrderId: `${baseUrl}/api/razorpay-payment`,
       
       
       

    }

    return apiList
}