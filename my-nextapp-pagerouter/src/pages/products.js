import SubLayout from "@/pages/layouts/SubLayout";
import Layout from "@/pages/layouts/MainLayout";

export default function Products() {


    return (
        <>
            Products Page
        </>
    );
}

Products.getLayout=function (page){
   // console.log('page',page)
    return(
        <Layout>

        <SubLayout>
            {page}
        </SubLayout>
        </Layout>
    )
}

