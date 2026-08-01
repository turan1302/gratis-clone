export const CATEGORY_TABS = {
    categories: 'categories',
    brands: 'brands',
};

export const CATEGORY_TAB_ITEMS = [
    { key: 'categories', label: 'Kategoriler' },
    { key: 'brands', label: 'Markalar' },
];

export const CATEGORIES = [
    {
        id: '1',
        title: 'Makyaj',
        subcategories: [
            { id: 'all', title: 'Tüm Ürünleri Görüntüle' },
            { id: '1', title: 'Dudak Makyajı', subtitle: 'Ruj, Likit Ruj, Kalem Ruj, Dudak Kalemi, Dudak Parlatıcısı' },
            { id: '2', title: 'Yüz Makyajı', subtitle: 'Fondöten, Kapatıcı, Pudra, Allık, Aydınlatıcı, Bronzlaştırıcı' },
            { id: '3', title: 'Göz Makyajı', subtitle: 'Maskara, Eyeliner, Göz Kalemi, Far, Kaş Maskarası' },
            { id: '4', title: 'Kaş Makyajı', subtitle: 'Kaş Kalemi, Kaş Maskarası, Kaş Farı, Kaş Sabitleyici' },
            { id: '5', title: 'Makyaj Temizleyici', subtitle: 'Makyaj Temizleme Suyu, Makyaj Temizleme Yağı, Makyaj Temizleme Mendili' },
        ],
    },
    {
        id: '2',
        title: 'Cilt Bakım',
        subcategories: [
            { id: 'all', title: 'Tüm Ürünleri Görüntüle' },
            { id: '1', title: 'Yüz Temizleme', subtitle: 'Yüz Temizleme Jeli, Yüz Temizleme Köpüğü, Micellar Su' },
            { id: '2', title: 'Nemlendirici', subtitle: 'Gündüz Kremi, Gece Kremi, Yüz Serumu, Göz Kremi' },
            { id: '3', title: 'Maske & Peeling', subtitle: 'Kil Maskesi, Yüz Maskesi, Peeling, Tonik' },
        ],
    },
    {
        id: '3',
        title: 'Saç Bakım',
        subcategories: [
            { id: 'all', title: 'Tüm Ürünleri Görüntüle' },
            { id: '1', title: 'Şampuan', subtitle: 'Normal Şampuan, Kuru Şampuan, Kepek Karşıtı Şampuan' },
            { id: '2', title: 'Saç Kremi & Bakım', subtitle: 'Saç Kremi, Saç Maskesi, Saç Serumu, Saç Yağı' },
            { id: '3', title: 'Şekillendirici', subtitle: 'Saç Spreyi, Jöle, Köpük, Wax' },
        ],
    },
    {
        id: '4',
        title: 'Parfüm & Deodorant',
        subcategories: [
            { id: 'all', title: 'Tüm Ürünleri Görüntüle' },
            { id: '1', title: 'Kadın Parfüm', subtitle: 'EDP, EDT, Vücut Spreyi' },
            { id: '2', title: 'Erkek Parfüm', subtitle: 'EDT, EDP, Deodorant' },
            { id: '3', title: 'Deodorant', subtitle: 'Roll-on, Sprey, Stick' },
        ],
    },
    {
        id: '5',
        title: 'Erkek Bakım',
        subcategories: [
            { id: 'all', title: 'Tüm Ürünleri Görüntüle' },
            { id: '1', title: 'Tıraş Ürünleri', subtitle: 'Tıraş Köpüğü, Tıraş Kremi, Tıraş Bıçağı' },
            { id: '2', title: 'Erkek Cilt Bakım', subtitle: 'Yüz Temizleme, Nemlendirici, Göz Altı Bakımı' },
        ],
    },
    {
        id: '6',
        title: 'Kişisel Bakım',
        subcategories: [
            { id: 'all', title: 'Tüm Ürünleri Görüntüle' },
            { id: '1', title: 'Ağız Bakım', subtitle: 'Diş Macunu, Diş Fırçası, Ağız Gargarası' },
            { id: '2', title: 'Vücut Bakım', subtitle: 'Vücut Losyonu, Duş Jeli, El Kremi' },
        ],
    },
    {
        id: '7',
        title: 'Anne & Bebek',
        subcategories: [
            { id: 'all', title: 'Tüm Ürünleri Görüntüle' },
            { id: '1', title: 'Bebek Bakım', subtitle: 'Bebek Şampuanı, Bebek Losyonu, Pişik Kremi' },
            { id: '2', title: 'Anne Bakım', subtitle: 'Göğüs Ucu Kremi, Çatlak Kremi' },
        ],
    },
    {
        id: '8',
        title: 'Ev & Yaşam',
        subcategories: [
            { id: 'all', title: 'Tüm Ürünleri Görüntüle' },
            { id: '1', title: 'Ev Temizlik', subtitle: 'Yüzey Temizleyici, Bulaşık Deterjanı' },
        ],
    },
    {
        id: '9',
        title: 'Moda & Aksesuar',
        subcategories: [
            { id: 'all', title: 'Tüm Ürünleri Görüntüle' },
            { id: '1', title: 'Aksesuar', subtitle: 'Çanta, Takı, Saç Aksesuarı' },
        ],
    },
    {
        id: '10',
        title: 'Süpermarket',
        subcategories: [
            { id: 'all', title: 'Tüm Ürünleri Görüntüle' },
            { id: '1', title: 'Gıda', subtitle: 'Atıştırmalık, İçecek, Kahvaltılık' },
        ],
    },
    {
        id: '11',
        title: 'Elektrikli Ürünler',
        subcategories: [
            { id: 'all', title: 'Tüm Ürünleri Görüntüle' },
            { id: '1', title: 'Kişisel Bakım Cihazları', subtitle: 'Saç Kurutma, Düzleştirici, Tıraş Makinesi' },
        ],
    },
    {
        id: '12',
        title: 'Duş & Banyo',
        subcategories: [
            { id: 'all', title: 'Tüm Ürünleri Görüntüle' },
            { id: '1', title: 'Duş Jeli', subtitle: 'Duş Jeli, Duş Köpüğü, Sabun' },
        ],
    },
    {
        id: '13',
        title: 'Hijyen & Bakım',
        subcategories: [
            { id: 'all', title: 'Tüm Ürünleri Görüntüle' },
            { id: '1', title: 'Hijyen', subtitle: 'Islak Mendil, Hijyenik Ped, Pamuk' },
        ],
    },
    {
        id: '14',
        title: 'Güneş Ürünleri',
        subcategories: [
            { id: 'all', title: 'Tüm Ürünleri Görüntüle' },
            { id: '1', title: 'Güneş Kremi', subtitle: 'Yüz Güneş Kremi, Vücut Güneş Kremi, After Sun' },
        ],
    },
];
