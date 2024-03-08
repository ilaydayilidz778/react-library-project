import React, { createContext, useEffect, useReducer } from "react";
import defaultImage from "../assets/img/defaultImage.jpg"
import axios from 'axios';
import { reducer, initialState, actionTypes } from '../Reducer';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const yeniKitapEkleDuzenle = async (yeni) => {
        let url = "http://localhost:3005/kitaplar";
        if (!state.duzenlenecekKitap) {
            dispatch({ type: actionTypes.KITAP_EKLE, payload: { yeni } })
            const yeniKitapResponse = await axios.post(url, yeni);
            console.log(yeniKitapResponse);
        } else {
            url += `/${state.duzenlenecekKitap.id}`;
            const duzenlenecekKitapResponse = await axios.put(url, yeni);
            dispatch({ type: actionTypes.KITAP_DUZENLE, payload: { id: state.duzenlenecekKitap.id, yeni: duzenlenecekKitapResponse.data } });
        }
    };

    const kitapSil = async (id) => {
        dispatch({ type: actionTypes.KITAP_SIL, id })
        const url = `http://localhost:3005/kitaplar/${id}`;
        const response = await axios.patch(url, { isDeleted: true });
        console.log(response);
    };

    const filtreyeGoreKitaplariGetir = async (seciliKategori) => {
        const url = `http://localhost:3005/kitaplar?kitapKategorisi=${seciliKategori}`;
        const response = await axios.get(url);
        dispatch({ type: actionTypes.FILTREYE_GORE_KITAPLARI_GETIR, payload: response.data });
    };

    const cardDuzenle = (id) => {
        dispatch({ type: actionTypes.CARD_DUZENLE, id })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Kitap Başarıyla Eklendi!");
        const resimUrl = state.kitapResmi !== "" ? state.kitapResmi : defaultImage;
        const yeniId = state.kitaplik.length > 0 ? (Number(state.kitaplik[state.kitaplik.length - 1].id) + 1).toString() : "1";
        yeniKitapEkleDuzenle({
            id: yeniId,
            kitapAdi: state.kitapAdi,
            kitapYazari: state.kitapYazari,
            kitapKategorisi: state.kitapKategorisi,
            kitapSayfaSayisi: state.kitapSayfaSayisi,
            kitapResmi: resimUrl,
            kitapAciklamasi: state.kitapAciklamasi
        });
        dispatch({ type: actionTypes.FORM_RESET })
    }

    const seciliKategoriyiDuzenle = (kategoriAdi) => {
        dispatch({ type: actionTypes.SECILEN_KATEGORI, payload: { action: kategoriAdi } });
    };

    const kitapGetir = async () => {
        const url = "http://localhost:3005/kitaplar";
        const response = await fetch(url);
        const kitaplar = await response.json();
        dispatch({ type: actionTypes.KITAPLARI_GETIR, payload: kitaplar })
    }

    const kategorileriGetir = async () => {
        const url = "http://localhost:3005/kategoriler";
        const response = await fetch(url);
        const kategoriler = await response.json();
        dispatch({ type: actionTypes.KATEGORILERI_GETIR, payload: kategoriler })
    }

    useEffect(() => {
        kitapGetir();
        kategorileriGetir();
    }, [])

    useEffect(() => {
        state.seciliKategori && filtreyeGoreKitaplariGetir(state.seciliKategori);
    }, [state.seciliKategori]);

    return (
        <DataContext.Provider value={{ kitapSil, cardDuzenle, handleSubmit, seciliKategoriyiDuzenle, state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;