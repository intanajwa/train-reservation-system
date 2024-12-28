// Fungsi Generate Laporan
function generateUserReport() {
    document.getElementById("report-output").innerHTML = `
        <h2>Laporan Pengguna</h2>
        <p>Total Pengguna: 100</p>
    `;
}

function generateBookingReport() {
    document.getElementById("report-output").innerHTML = `
        <h2>Laporan Pemesanan</h2>
        <p>Total Pemesanan: 50</p>
    `;
}

function generateRevenueReport() {
    document.getElementById("report-output").innerHTML = `
        <h2>Laporan Pendapatan</h2>
        <p>Total Pendapatan: Rp 10.000.000</p>
    `;
}
