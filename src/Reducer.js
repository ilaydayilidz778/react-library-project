export const initialState = {
    kitaplik: [],
    kategoriler: [],
    arananKelime: '',
    seciliKategori: '',
    duzenlenecekKitap: '',
    kitapAdi: "",
    kitapYazari: "",
    kitapKategorisi: "Kategori Seçiniz",
    kitapSayfaSayisi: 0,
    kitapResmi: "",
    kitapAciklamasi: ""
};

// Eylem türleri
export const actionTypes = {
    KITAPLARI_GETIR: "kitaplariGetir",
    KATEGORILERI_GETIR: "kategorileriGetir",
    FORM_RESET: "formReset",
    CARD_DUZENLE: "cardDuzenle",
    KITAP_SIL: "kitapSil",
    KITAP_EKLE: "kitapEkle",
    KITAP_DUZENLE: "kitapDuzenle",
    SEARCH: "search",
    SECILEN_KATEGORI: "secilenKategori",
    FILTREYE_GORE_KITAPLARI_GETIR: "filtreyeGoreKitaplariGetir",
    KITAP_ADI: "kitapAdi",
    KITAP_YAZARI: "kitapYazari",
    KITAP_KATEGORISI: "kitapKategorisi",
    KITAP_SAYFA_SAYISI: "kitapSayfaSayisi",
    KITAP_RESMI: "kitapResmi",
    KITAP_ACIKLAMASI: "kitapAciklamasi"

}

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.KITAPlARI_GETIR:
            return {
                ...state,
                kitaplik: action.payload
            }
        case actionTypes.KATEGORILERI_GETIR:
            return {
                ...state,
                kategoriler: action.payload
            }
        case actionTypes.FORM_RESET:
            return {
                ...state,
                kitapAdi: "",
                kitapYazari: "",
                kitapKategorisi: "Kategori Seçiniz",
                kitapSayfaSayisi: 0,
                kitapResmi: "",
                kitapAciklamasi: ""
            }
        case actionTypes.CARD_DUZENLE:
            const duzenlenecekKitap = state.kitaplik.find(kitap => kitap.id === action.id);
            return {
                ...state,
                kitapAdi: duzenlenecekKitap.kitapAdi,
                kitapYazari: duzenlenecekKitap.kitapYazari,
                kitapKategorisi: duzenlenecekKitap.kitapKategorisi,
                kitapSayfaSayisi: duzenlenecekKitap.kitapSayfaSayisi,
                kitapResmi: duzenlenecekKitap.kitapResmi,
                kitapAciklamasi: duzenlenecekKitap.kitapAciklamasi,
                duzenlenecekKitap: duzenlenecekKitap
            }
        case actionTypes.KITAP_SIL:
            const filtredKitaplik = state.kitaplik.filter(item => item.id !== action.id);
            return {
                ...state,
                kitaplik: filtredKitaplik
            }
        case actionTypes.KITAP_EKLE:
            const guncelKitaplik = [...state.kitaplik, action.payload.yeni];
            return {
                ...state,
                kitaplik: guncelKitaplik
            }
        case actionTypes.KITAP_DUZENLE:
            const guncellenmisKitaplar = state.kitaplik.map(kitap => {
                if (kitap.id === action.payload.id) {
                    return { ...kitap, ...action.payload.yeni };
                }
                return kitap;
            });
            return {
                ...state,
                kitaplik: guncellenmisKitaplar
            }
        case actionTypes.SEARCH:
            return {
                ...state,
                arananKelime: action.payload.action
            }
        case actionTypes.SECILEN_KATEGORI:
            return {
                ...state,
                seciliKategori: action.payload.action
            }
        case actionTypes.FILTREYE_GORE_KITAPLARI_GETIR:
            return {
                ...state,
                kitaplik: action.payload
            }
        case actionTypes.KITAP_ADI:
            return {
                ...state,
                kitapAdi: action.payload
            }
        case actionTypes.KITAP_YAZARI:
            return {
                ...state,
                kitapYazari: action.payload
            }
        case actionTypes.KITAP_KATEGORISI:
            return {
                ...state,
                kitapKategorisi: action.payload
            }
        case actionTypes.KITAP_SAYFA_SAYISI:
            return {
                ...state,
                kitapSayfaSayisi: action.payload
            }
        case actionTypes.KITAP_RESMI:
            return {
                ...state,
                kitapResmi: action.payload
            }
        case actionTypes.KITAP_ACIKLAMASI:
            return {
                ...state,
                kitapAciklamasi: action.payload
            }
        default:
            return state;
    }
}
