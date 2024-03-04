import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

// context oluşturulması
const DataContext = createContext();

// oluşturulan contexte bir sağlayıcı oluşturulur.
export const DataProvider = ({ children }) => {
    // Proje yapısındaki tüm state, methot, etc taşınacak !!

    const [kitaplik, setKitaplik] = useState([]);
    const [kategoriler, setKategoriler] = useState([]);
    const [arananKelime, setArananKelime] = useState('');
    const [seciliKategori, setSeciliKategori] = useState('');
    const [duzenlenecekKitap, setDuzenlenecekKitap] = useState('');
    const [kitapAdi, setKitapAdi] = useState("");
    const [kitapYazari, setKitapYazari] = useState("");
    const [kitapKategorisi, setKitapKategorisi] = useState("Kategori Seçiniz");
    const [kitapSayfaSayisi, setKitapSayfaSayisi] = useState(0);
    const [kitapResmi, setKitapResmi] = useState("");
    const [kitapAciklamasi, setKitapAciklamasi] = useState("");

    // kategorilier api getirme


    // Kitap ekleme/düzenleme
    const yeniKitapEkleDuzenle = async (yeni) => {
        //kitap ekleme işlemi için 
        let url = "http://localhost:3005/kitaplar";
        if (!duzenlenecekKitap) {
            setKitaplik(prevKitaplik => [...prevKitaplik, yeni]);
            const yeniKitapResponse = await axios.post(url, yeni);
            console.log(yeniKitapResponse);
            // kitapGetir(); Hatalı gereksiz get isteği atar!
        }
        else {
            url += `/${duzenlenecekKitap.id}`;
            const duzenlenecekKitapResponse = await axios.put(url, yeni);
            console.log(duzenlenecekKitapResponse);
            setDuzenlenecekKitap('');
            setKitaplik(prevKitaplik =>
                prevKitaplik.map(kitap => {
                    if (kitap.id === duzenlenecekKitap.id) {
                        return { ...duzenlenecekKitapResponse.data }
                    }
                    else {
                        return { ...kitap }
                    }
                }));
        }
    };

    // Kitap silme
    const kitapSil = async (id) => {
        setKitaplik(prevKitaplik => prevKitaplik.filter(statedenGelen => statedenGelen.id !== id));
        const url = `http://localhost:3005/kitaplar/${id}`;
        // const response = await axios.delete(url); // !! Tehlikeli
        const response = await axios.patch(url, { isDeleted: true });
        console.log(response);
    };

    const filtreyeGoreKitaplariGetir = async (seciliKategori) => {
        const url = `http://localhost:3005/kitaplar?kitapKategorisi=${seciliKategori}`;
        const response = await axios.get(url);
        setKitaplik(response.data);
    };

    const cardDuzenle = (id) => {
        const duzenlenecekKitap = kitaplik.find(kitap => kitap.id === id);
        setDuzenlenecekKitap(duzenlenecekKitap);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Kitap Başarıyla Eklendi!");
        const resimUrl = kitapResmi !== "" ? kitapResmi : defaultImage;
        yeniKitapEkleDuzenle({
            id: kitaplik.length > 0 ? (Number(kitaplik[kitaplik.length - 1].id) + 1).toString() : "1",
            kitapAdi: kitapAdi,
            kitapYazari: kitapYazari,
            kitapKategorisi: kitapKategorisi,
            kitapSayfaSayisi: kitapSayfaSayisi,
            kitapResmi: resimUrl,
            kitapAciklamasi: kitapAciklamasi
        });
        setKitapAdi("");
        setKitapYazari("");
        setKitapKategorisi("Kategori Seçiniz");
        setKitapSayfaSayisi(0);
        setKitapResmi("");
        setKitapAciklamasi("");
    };

    // kitapları api getirme
    const kitapGetir = async () => {
        const url = "http://localhost:3005/kitaplar";
        const response = await fetch(url);
        const kitaplar = await response.json();
        setKitaplik(kitaplar);
    }

    // kategorilier api getirme
    const kategorileriGetir = async () => {
        const url = "http://localhost:3005/kategoriler";
        const response = await fetch(url);
        const kategoriler = await response.json();
        setKategoriler(kategoriler);
    }

    useEffect(() => {
        kitapGetir();
        kategorileriGetir();
    }, [])

    useEffect(() => {
        seciliKategori &&
            filtreyeGoreKitaplariGetir(seciliKategori);
    }, [seciliKategori]);

    useEffect(() => {
        if (duzenlenecekKitap) {
            setKitapAdi(duzenlenecekKitap.kitapAdi);
            setKitapYazari(duzenlenecekKitap.kitapYazari);
            setKitapKategorisi(duzenlenecekKitap.kitapKategorisi);
            setKitapResmi(duzenlenecekKitap.kitapResmi);
            setKitapSayfaSayisi(duzenlenecekKitap.kitapSayfaSayisi);
            setKitapAciklamasi(duzenlenecekKitap.kitapAciklamasi);
        }
    }, [duzenlenecekKitap]);



    return (

        <DataContext.Provider value={
            {
                kitapSil, cardDuzenle, // Card
                kitaplik, arananKelime, // CardList
                kategoriler, setSeciliKategori, //Navi
                setArananKelime, //Search
                handleSubmit, duzenlenecekKitap, //Form
                kitapAdi,
                kitapYazari,
                kitapKategorisi,
                kitapSayfaSayisi,
                kitapResmi,
                kitapAciklamasi,
                setKitapAdi,
                setKitapYazari,
                setKitapKategorisi,
                setKitapSayfaSayisi,
                setKitapResmi,
                setKitapAciklamasi,
            }
        }>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;
