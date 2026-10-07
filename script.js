/* =========================================================
   DATA ORGANISASI BEM
   ========================================================= */

const defaultData = {

    anggota: [

        {
            id: 1,
            nama: "Ramliadi",
            jabatan: "Ketua BEM",
            divisi: "Pimpinan"
        },

        {
            id: 2,
            nama: "Mutia Rahayu",
            jabatan: "Wakil Ketua",
            divisi: "Pimpinan"
        },

        {
            id: 3,
            nama: "Nirmala Nursantika",
            jabatan: "Sekretaris",
            divisi: "Sekretariat"
        },

        {
            id: 4,
            nama: "Herlina Yani Putri",
            jabatan: "Bendahara",
            divisi: "Keuangan"
        },

        {
            id: 5,
            nama: "Febriola",
            jabatan: "Koordinator Komisi 1",
            divisi: "Akselerasi"
        },

        {
            id: 6,
            nama: "Betty",
            jabatan: "Direktorat Akademik Mahasiswa",
            divisi: "Komisi 1"
        },

        {
            id: 7,
            nama: "Sefanya Matda Kartini",
            jabatan: "Direktorat Literasi dan Kajian",
            divisi: "Komisi 1"
        },

        {
            id: 8,
            nama: "Irfan Abdurrahman",
            jabatan: "Direktorat Pengembangan Prestasi Mahasiswa",
            divisi: "Komisi 1"
        },

        {
            id: 9,
            nama: "Tiara Sari",
            jabatan: "Koordinator Komisi 2",
            divisi: "Komedika"
        },

        {
            id: 10,
            nama: "Nieha Sumaya",
            jabatan: "Direktorat Media Digital dan Konten Kreatif",
            divisi: "Komisi 2"
        },

        {
            id: 11,
            nama: "Vibriyanti",
            jabatan: "Direktorat Dokumentasi dan Desain Informasi",
            divisi: "Komisi 2"
        },

        {
            id: 12,
            nama: "Syarifah Azzakia",
            jabatan: "Direktorat Hubungan Publik dan Kemitraan",
            divisi: "Komisi 2"
        },

        {
            id: 13,
            nama: "Dandi Mardiansyah",
            jabatan: "Koordinator Komisi 3",
            divisi: "Soslingga"
        },

        {
            id: 14,
            nama: "Dafa Ryandra Putra",
            jabatan: "Direktorat Olahraga Mahasiswa",
            divisi: "Komisi 3"
        },

        {
            id: 15,
            nama: "Nehemia Dheadema Mareten",
            jabatan: "Direktorat Kebugaran dan Rekreasi Mahasiswa",
            divisi: "Komisi 3"
        },

        {
            id: 16,
            nama: "Aprillia Putri",
            jabatan: "Direktorat Sosial dan Lingkungan",
            divisi: "Komisi 3"
        },

        {
            id: 17,
            nama: "Andreas",
            jabatan: "Koordinator Komisi 4",
            divisi: "Personalia"
        },

        {
            id: 18,
            nama: "Maulana Rabiansyah",
            jabatan: "Direktorat Kaderisasi dan Pengembangan SDM",
            divisi: "Komisi 4"
        },

        {
            id: 19,
            nama: "Melyza Dharmawati",
            jabatan: "Direktorat Pembinaan Karakter Mahasiswa",
            divisi: "Komisi 4"
        },

        {
            id: 20,
            nama: "Ade Ginaris",
            jabatan: "Direktorat Kepemimpinan dan Etika Organisasi",
            divisi: "Komisi 4"
        }

    ],


    kegiatan: [

        {
            id: 1,
            nama: "Rapat Kerja BEM",
            tanggal: "10 Oktober 2026",
            lokasi: "Ruang Organisasi",
            status: "Terjadwal"
        },

        {
            id: 2,
            nama: "Seminar Pengembangan Mahasiswa",
            tanggal: "15 Oktober 2026",
            lokasi: "Aula Kampus",
            status: "Terjadwal"
        },

        {
            id: 3,
            nama: "Bakti Sosial Mahasiswa",
            tanggal: "20 Oktober 2026",
            lokasi: "Pontianak",
            status: "Terjadwal"
        }

    ],


    proker: [

        {
            id: 1,
            nama: "Pekan Akademik Mahasiswa",
            divisi: "Komisi 1",
            ketua: "Febriola",
            status: "Berjalan"
        },

        {
            id: 2,
            nama: "Media Kreatif BEM",
            divisi: "Komisi 2",
            ketua: "Tiara Sari",
            status: "Berjalan"
        },

        {
            id: 3,
            nama: "BEM Sport Competition",
            divisi: "Komisi 3",
            ketua: "Dandi Mardiansyah",
            status: "Rencana"
        },

        {
            id: 4,
            nama: "Pelatihan Kepemimpinan",
            divisi: "Komisi 4",
            ketua: "Andreas",
            status: "Rencana"
        }

    ],


    pengumuman: [

        {
            id: 1,
            judul: "Rapat Koordinasi Pengurus",
            tanggal: "07 Oktober 2026",
            isi: "Seluruh pengurus diharapkan hadir dalam rapat koordinasi."
        },

        {
            id: 2,
            judul: "Pengumpulan Program Kerja",
            tanggal: "08 Oktober 2026",
            isi: "Setiap komisi segera mengumpulkan rancangan program kerja."
        },

        {
            id: 3,
            judul: "Agenda Kegiatan BEM",
            tanggal: "10 Oktober 2026",
            isi: "Agenda kegiatan organisasi akan dilaksanakan sesuai jadwal."
        }

    ]

};


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

let data;

try {

    const saved = localStorage.getItem("bemData");

    data = saved
        ? JSON.parse(saved)
        : JSON.parse(JSON.stringify(defaultData));

} catch {

    data = JSON.parse(JSON.stringify(defaultData));

}


function saveData() {

    localStorage.setItem(
        "bemData",
        JSON.stringify(data)
    );

}


/* =========================================================
   ELEMENT
   ========================================================= */

const content = document.getElementById("content");
const pageTitle = document.getElementById("pageTitle");
const pageDescription = document.getElementById("pageDescription");

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalForm = document.getElementById("modalForm");

let currentPage = "dashboard";
let editingId = null;


/* =========================================================
   PAGE INFORMATION
   ========================================================= */

const pageInfo = {

    dashboard: {
        title: "Dashboard",
        description: "Ringkasan informasi organisasi."
    },

    anggota: {
        title: "Data Anggota",
        description: "Kelola seluruh data pengurus organisasi."
    },

    struktur: {
        title: "Struktur Organisasi",
        description: "Bagan kepengurusan BEM."
    },

    kegiatan: {
        title: "Kegiatan",
        description: "Kelola agenda dan kegiatan organisasi."
    },

    proker: {
        title: "Program Kerja",
        description: "Kelola program kerja setiap komisi."
    },

    pengumuman: {
        title: "Pengumuman",
        description: "Informasi dan pengumuman organisasi."
    }

};


/* =========================================================
   NAVIGATION
   ========================================================= */

document.querySelectorAll(".nav").forEach(button => {

    button.addEventListener("click", () => {

        currentPage = button.dataset.page;

        document.querySelectorAll(".nav").forEach(nav => {
            nav.classList.remove("active");
        });

        button.classList.add("active");

        sidebar.classList.remove("open");
        overlay.classList.remove("active");

        render();

    });

});


/* =========================================================
   MOBILE MENU
   ========================================================= */

document.getElementById("menuBtn").addEventListener("click", () => {

    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");

});


overlay.addEventListener("click", () => {

    sidebar.classList.remove("open");
    overlay.classList.remove("active");

});


/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard() {

    return `

        <div class="page-top">

            <h2>Selamat Datang, Admin BEM</h2>

            <p>
                Pantau dan kelola informasi organisasi
                melalui sistem ini.
            </p>

        </div>


        <div class="stats">

            <div class="stat">

                <div class="stat-top">
                    <span>Anggota</span>
                    <div class="stat-icon">♟</div>
                </div>

                <div class="stat-number">
                    ${data.anggota.length}
                </div>

                <div class="stat-label">
                    Total pengurus
                </div>

            </div>


            <div class="stat">

                <div class="stat-top">
                    <span>Kegiatan</span>
                    <div class="stat-icon">◷</div>
                </div>

                <div class="stat-number">
                    ${data.kegiatan.length}
                </div>

                <div class="stat-label">
                    Agenda kegiatan
                </div>

            </div>


            <div class="stat">

                <div class="stat-top">
                    <span>Program Kerja</span>
                    <div class="stat-icon">☷</div>
                </div>

                <div class="stat-number">
                    ${data.proker.length}
                </div>

                <div class="stat-label">
                    Program organisasi
                </div>

            </div>


            <div class="stat">

                <div class="stat-top">
                    <span>Pengumuman</span>
                    <div class="stat-icon">!</div>
                </div>

                <div class="stat-number">
                    ${data.pengumuman.length}
                </div>

                <div class="stat-label">
                    Informasi terbaru
                </div>

            </div>

        </div>


        <div class="dashboard-grid">

            <div class="panel">

                <div class="panel-title">
                    <h3>Kegiatan Terbaru</h3>
                </div>

                ${data.kegiatan.slice(0,4).map(item => `

                    <div class="activity">

                        <strong>
                            ${item.nama}
                        </strong>

                        <p>
                            ${item.tanggal} · ${item.lokasi}
                        </p>

                    </div>

                `).join("")}

            </div>


            <div class="panel">

                <div class="panel-title">
                    <h3>Pengumuman</h3>
                </div>

                ${data.pengumuman.slice(0,4).map(item => `

                    <div class="activity">

                        <strong>
                            ${item.judul}
                        </strong>

                        <p>
                            ${item.tanggal}
                        </p>

                    </div>

                `).join("")}

            </div>

        </div>

    `;

}


/* =========================================================
   STRUKTUR ORGANISASI
   ========================================================= */

function renderStruktur() {

    return `

    <div class="structure-page">

        <div class="structure-title">

            <h2>Struktur Organisasi BEM</h2>

            <p>
                Struktur kepengurusan dan pembagian
                komisi organisasi.
            </p>

        </div>


        <!-- KETUA -->

        <div class="org-center">

            <div class="org-card leader">

                <small>KETUA BEM</small>

                <strong>
                    Ramliadi
                </strong>

            </div>

        </div>


        <div class="org-line"></div>


        <!-- WAKIL -->

        <div class="org-center">

            <div class="org-card vice">

                <small>WAKIL KETUA</small>

                <strong>
                    Mutia Rahayu
                </strong>

            </div>

        </div>


        <div class="org-line"></div>


        <!-- SEKRETARIS BENDAHARA -->

        <div class="executive-row">

            <div class="executive-item">

                <div class="org-card">

                    <small>SEKRETARIS</small>

                    <strong>
                        Nirmala Nursantika
                    </strong>

                </div>

            </div>


            <div class="executive-item">

                <div class="org-card">

                    <small>BENDAHARA</small>

                    <strong>
                        Herlina Yani Putri
                    </strong>

                </div>

            </div>

        </div>


        <div class="org-line"></div>


        <!-- KOMISI -->

        <div class="commission-wrapper">

            <div class="commission-main-line"></div>


            <!-- KOMISI 1 -->

            <div class="commission">

                <div class="commission-card c1">

                    <small>KOMISI 1</small>

                    <h3>Akselerasi</h3>

                    <p>
                        Akademik, Literasi dan Prestasi
                    </p>

                    <strong>
                        Febriola
                    </strong>

                </div>

                <div class="director-connector"></div>

                <div class="director-list">

                    <div class="director">
                        <span>
                            Direktorat Akademik Mahasiswa
                        </span>
                        <strong>Betty</strong>
                    </div>

                    <div class="director">
                        <span>
                            Direktorat Literasi dan Kajian
                        </span>
                        <strong>
                            Sefanya Matda Kartini
                        </strong>
                    </div>

                    <div class="director">
                        <span>
                            Direktorat Pengembangan Prestasi Mahasiswa
                        </span>
                        <strong>
                            Irfan Abdurrahman
                        </strong>
                    </div>

                </div>

            </div>


            <!-- KOMISI 2 -->

            <div class="commission">

                <div class="commission-card c2">

                    <small>KOMISI 2</small>

                    <h3>Komedika</h3>

                    <p>
                        Komunikasi, Media dan Publik
                    </p>

                    <strong>
                        Tiara Sari
                    </strong>

                </div>

                <div class="director-connector"></div>

                <div class="director-list">

                    <div class="director">
                        <span>
                            Direktorat Media Digital dan Konten Kreatif
                        </span>
                        <strong>
                            Nieha Sumaya
                        </strong>
                    </div>

                    <div class="director">
                        <span>
                            Direktorat Dokumentasi dan Desain Informasi
                        </span>
                        <strong>
                            Vibriyanti
                        </strong>
                    </div>

                    <div class="director">
                        <span>
                            Direktorat Hubungan Publik dan Kemitraan
                        </span>
                        <strong>
                            Syarifah Azzakia
                        </strong>
                    </div>

                </div>

            </div>


            <!-- KOMISI 3 -->

            <div class="commission">

                <div class="commission-card c3">

                    <small>KOMISI 3</small>

                    <h3>Soslingga</h3>

                    <p>
                        Sosial, Lingkungan dan Olahraga
                    </p>

                    <strong>
                        Dandi Mardiansyah
                    </strong>

                </div>

                <div class="director-connector"></div>

                <div class="director-list">

                    <div class="director">
                        <span>
                            Direktorat Olahraga Mahasiswa
                        </span>
                        <strong>
                            Dafa Ryandra Putra
                        </strong>
                    </div>

                    <div class="director">
                        <span>
                            Direktorat Kebugaran dan Rekreasi Mahasiswa
                        </span>
                        <strong>
                            Nehemia Dheadema Mareten
                        </strong>
                    </div>

                    <div class="director">
                        <span>
                            Direktorat Sosial dan Lingkungan
                        </span>
                        <strong>
                            Aprillia Putri
                        </strong>
                    </div>

                </div>

            </div>


            <!-- KOMISI 4 -->

            <div class="commission">

                <div class="commission-card c4">

                    <small>KOMISI 4</small>

                    <h3>Personalia</h3>

                    <p>
                        Pengembangan SDM dan Karakter
                    </p>

                    <strong>
                        Andreas
                    </strong>

                </div>

                <div class="director-connector"></div>

                <div class="director-list">

                    <div class="director">
                        <span>
                            Direktorat Kaderisasi dan Pengembangan SDM
                        </span>
                        <strong>
                            Maulana Rabiansyah
                        </strong>
                    </div>

                    <div class="director">
                        <span>
                            Direktorat Pembinaan Karakter Mahasiswa
                        </span>
                        <strong>
                            Melyza Dharmawati
                        </strong>
                    </div>

                    <div class="director">
                        <span>
                            Direktorat Kepemimpinan dan Etika Organisasi
                        </span>
                        <strong>
                            Ade Ginaris
                        </strong>
                    </div>

                </div>

            </div>

        </div>

    </div>

    `;

}


/* =========================================================
   TABLE GENERATOR
   ========================================================= */

function renderTable(type, columns, title, addText) {

    const rows = data[type];

    return `

        <div class="page-top">

            <h2>${title}</h2>

            <p>
                Kelola data ${title.toLowerCase()}.
            </p>

        </div>


        <div class="toolbar">

            <input
                class="search"
                id="searchInput"
                type="search"
                placeholder="Cari data..."
            >

            <button
                class="btn btn-primary"
                onclick="openForm('${type}')"
            >
                + ${addText}
            </button>

        </div>


        <div class="table-wrap">

            <table>

                <thead>

                    <tr>

                        ${columns.map(column =>
                            `<th>${column.label}</th>`
                        ).join("")}

                        <th>Aksi</th>

                    </tr>

                </thead>


                <tbody id="tableBody">

                    ${rows.map(item => `

                        <tr>

                            ${columns.map(column => `

                                <td>
                                    ${
                                        column.badge
                                        ? `<span class="badge">${item[column.key]}</span>`
                                        : item[column.key]
                                    }
                                </td>

                            `).join("")}


                            <td>

                                <div class="actions">

                                    <button
                                        class="btn btn-edit"
                                        onclick="openForm('${type}', ${item.id})"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        class="btn btn-delete"
                                        onclick="deleteItem('${type}', ${item.id})"
                                    >
                                        Hapus
                                    </button>

                                </div>

                            </td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>

    `;

}


/* =========================================================
   ANGGOTA
   ========================================================= */

function renderAnggota() {

    return renderTable(

        "anggota",

        [
            {
                key: "nama",
                label: "Nama"
            },
            {
                key: "jabatan",
                label: "Jabatan"
            },
            {
                key: "divisi",
                label: "Divisi",
                badge: true
            }
        ],

        "Data Anggota",
        "Tambah Anggota"

    );

}


/* =========================================================
   KEGIATAN
   ========================================================= */

function renderKegiatan() {

    return renderTable(

        "kegiatan",

        [
            {
                key: "nama",
                label: "Nama Kegiatan"
            },
            {
                key: "tanggal",
                label: "Tanggal"
            },
            {
                key: "lokasi",
                label: "Lokasi"
            },
            {
                key: "status",
                label: "Status",
                badge: true
            }
        ],

        "Kegiatan",
        "Tambah Kegiatan"

    );

}


/* =========================================================
   PROKER
   ========================================================= */

function renderProker() {

    return renderTable(

        "proker",

        [
            {
                key: "nama",
                label: "Program Kerja"
            },
            {
                key: "divisi",
                label: "Divisi",
                badge: true
            },
            {
                key: "ketua",
                label: "Penanggung Jawab"
            },
            {
                key: "status",
                label: "Status",
                badge: true
            }
        ],

        "Program Kerja",
        "Tambah Program"

    );

}


/* =========================================================
   PENGUMUMAN
   ========================================================= */

function renderPengumuman() {

    return `

        <div class="page-top">

            <h2>Pengumuman</h2>

            <p>
                Informasi terbaru organisasi BEM.
            </p>

        </div>


        <div class="toolbar">

            <div></div>

            <button
                class="btn btn-primary"
                onclick="openForm('pengumuman')"
            >
                + Tambah Pengumuman
            </button>

        </div>


        <div class="announcement-grid">

            ${data.pengumuman.map(item => `

                <article class="announcement">

                    <div class="announcement-date">
                        ${item.tanggal}
                    </div>

                    <h3>
                        ${item.judul}
                    </h3>

                    <p>
                        ${item.isi}
                    </p>

                    <div class="announcement-actions">

                        <button
                            class="btn btn-edit"
                            onclick="openForm('pengumuman', ${item.id})"
                        >
                            Edit
                        </button>

                        <button
                            class="btn btn-delete"
                            onclick="deleteItem('pengumuman', ${item.id})"
                        >
                            Hapus
                        </button>

                    </div>

                </article>

            `).join("")}

        </div>

    `;

}


/* =========================================================
   FORM
   ========================================================= */

function openForm(type, id = null) {

    editingId = id;

    const item = id
        ? data[type].find(x => x.id === id)
        : null;

    modal.classList.remove("hidden");

    modalTitle.textContent =
        id ? "Edit Data" : "Tambah Data";


    let html = "";


    if (type === "anggota") {

        html = `

            ${input(
                "nama",
                "Nama Lengkap",
                item?.nama
            )}

            ${input(
                "jabatan",
                "Jabatan",
                item?.jabatan
            )}

            ${input(
                "divisi",
                "Divisi",
                item?.divisi
            )}

            ${submitButton()}

        `;

    }


    if (type === "kegiatan") {

        html = `

            ${input(
                "nama",
                "Nama Kegiatan",
                item?.nama
            )}

            ${input(
                "tanggal",
                "Tanggal",
                item?.tanggal
            )}

            ${input(
                "lokasi",
                "Lokasi",
                item?.lokasi
            )}

            ${input(
                "status",
                "Status",
                item?.status
            )}

            ${submitButton()}

        `;

    }


    if (type === "proker") {

        html = `

            ${input(
                "nama",
                "Nama Program Kerja",
                item?.nama
            )}

            ${input(
                "divisi",
                "Divisi",
                item?.divisi
            )}

            ${input(
                "ketua",
                "Penanggung Jawab",
                item?.ketua
            )}

            ${input(
                "status",
                "Status",
                item?.status
            )}

            ${submitButton()}

        `;

    }


    if (type === "pengumuman") {

        html = `

            ${input(
                "judul",
                "Judul Pengumuman",
                item?.judul
            )}

            ${input(
                "tanggal",
                "Tanggal",
                item?.tanggal
            )}

            <div class="form-group">

                <label>Isi Pengumuman</label>

                <textarea
                    name="isi"
                    required
                >${item?.isi || ""}</textarea>

            </div>

            ${submitButton()}

        `;

    }


    modalForm.dataset.type = type;

    modalForm.innerHTML = html;

}


function input(name, label, value = "") {

    return `

        <div class="form-group">

            <label>
                ${label}
            </label>

            <input
                type="text"
                name="${name}"
                value="${value || ""}"
                required
            >

        </div>

    `;

}


function submitButton() {

    return `

        <button
            type="submit"
            class="btn btn-primary form-submit"
        >
            Simpan Data
        </button>

    `;

}


/* =========================================================
   SAVE FORM
   ========================================================= */

modalForm.addEventListener("submit", event => {

    event.preventDefault();

    const type = modalForm.dataset.type;

    const formData = new FormData(modalForm);

    const object = {};

    formData.forEach((value, key) => {
        object[key] = value;
    });


    if (editingId) {

        const index = data[type].findIndex(
            item => item.id === editingId
        );

        data[type][index] = {
            ...data[type][index],
            ...object
        };

    } else {

        const ids = data[type].map(item => item.id);

        const newId =
            ids.length
                ? Math.max(...ids) + 1
                : 1;

        data[type].push({
            id: newId,
            ...object
        });

    }


    saveData();

    closeModal();

    render();

});


/* =========================================================
   DELETE
   ========================================================= */

function deleteItem(type, id) {

    const confirmDelete =
        confirm("Yakin ingin menghapus data ini?");

    if (!confirmDelete) {
        return;
    }

    data[type] = data[type].filter(
        item => item.id !== id
    );

    saveData();

    render();

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeModal() {

    modal.classList.add("hidden");

    modalForm.innerHTML = "";

    editingId = null;

}


document
    .getElementById("closeModal")
    .addEventListener("click", closeModal);


modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeModal();
    }

});


/* =========================================================
   SEARCH
   ========================================================= */

document.addEventListener("input", event => {

    if (event.target.id !== "searchInput") {
        return;
    }

    const keyword =
        event.target.value.toLowerCase();

    document
        .querySelectorAll("#tableBody tr")
        .forEach(row => {

            row.style.display =
                row.textContent
                    .toLowerCase()
                    .includes(keyword)
                    ? ""
                    : "none";

        });

});


/* =========================================================
   RENDER
   ========================================================= */

function render() {

    const info = pageInfo[currentPage];

    pageTitle.textContent = info.title;

    pageDescription.textContent =
        info.description;


    switch (currentPage) {

        case "dashboard":
            content.innerHTML =
                renderDashboard();
            break;

        case "anggota":
            content.innerHTML =
                renderAnggota();
            break;

        case "struktur":
            content.innerHTML =
                renderStruktur();
            break;

        case "kegiatan":
            content.innerHTML =
                renderKegiatan();
            break;

        case "proker":
            content.innerHTML =
                renderProker();
            break;

        case "pengumuman":
            content.innerHTML =
                renderPengumuman();
            break;

        default:
            content.innerHTML =
                renderDashboard();

    }

}


/* =========================================================
   START
   ========================================================= */

render();