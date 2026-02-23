const API_URL = `${process.env.NEXT_PUBLIC_API_SENDIU_CALLINK as string}/api/v1`;

export default async function createLink() {
    const url = `${API_URL}/links`;

    const data = {
        external_id: "1",
        data: "{\"field1\": \"value1\",\"field2\": [\"value2\"]}"
    };

    const token = `eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJpS25XQ3NaQ2wxNUowODZvQVFiVmtpQVpGT3BzSWVYcjM0VGtqUUZOR0k0In0.eyJleHAiOjE3NzM4NTA0MDcsImlhdCI6MTc3MTI1ODQwNywianRpIjoib25ydHJvOmM3OGE1Mzc1LWUwNjctNDY5OC1iYmJhLTAzOWVkZTZhMmZjOSIsImlzcyI6Imh0dHBzOi8va2V5Y2xhay1zZW5kaXUuYm90cHJvcGFuZWwuY29tL3JlYWxtcy9jYW1wYWlnbmVyIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImIyZGNhYmVhLTI1OWQtNGRiMS04M2ZmLTFkZWQyMTg1ZTYwMCIsInR5cCI6IkJlYXJlciIsImF6cCI6ImludGVnX3Rva2VucyIsInNpZCI6IjFlYzQzYWE5LTM3ZmItNDE1My04YzJkLWRmNGUxZDhjMDA2NiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInBfY3JlYXJfcGFxdWV0ZSIsInJfb3BlcmFkb3IiLCJwX2NyZWFyX2NhbXBhbmEiLCJyX3N1cGVydmlzb3IiLCJwX29idGVuZXJfZmVjaGFzX2V4Y2x1aWRhcyIsInBfb2J0ZW5lcl9jb25maWdfcHJvdmVlZG9yIiwicF9jcmVhcl9saW5rX2xsYW1hZGEiLCJwX2JvcnJhcl9jb25maWdfcHJvdmVlZG9yIiwicF9zdWJpcl9hcmNoaXZvIiwicF9hY3R1YWxpemFyX2JvdHByb19jb3JyZWxhY2lvbmVzIiwicF9vYnRlbmVyX3JvbGVzIiwicF9vYnRlbmVyX29yZ2FuaXphY2lvbmVzIiwicF9jb25zdWx0YXJfZW52aW9zIiwicF9ib3JyYXJfY29udGFjdGxpc3QiLCJwX29idGVuZXJfYXBpa2V5cyIsInBfaW5mb19hcmNoaXZvIiwicF9hZG1fcmVwb3J0ZV9jb25zb2xpZGFkbyIsInBfYWN0dWFsaXphcl9taV91c3VhcmlvIiwidW1hX2F1dGhvcml6YXRpb24iLCJwX2JvcnJhcl93ZWJob29rIiwicF9jcmVhcl9hcGlrZXkiLCJwX2FjdHVhbGl6YXJfZmVjaGFzX2V4Y2x1aWRhcyIsInBfYm9ycmFyX3BsYW50aWxsYSIsInBfb2J0ZW5lcl9wYXF1ZXRlcyIsInBfY3JlYXJfcGxhbnRpbGxhIiwicF9ib3JyYXJfZmVjaGFzX2V4Y2x1aWRhcyIsInBfY29udHJvbF9jYW1wYW5hIiwicF9vYnRlbmVyX2xpbWl0ZV9wYXF1ZXRlX3VzdWFyaW8iLCJwX29idGVuZXJfY2FtcGFuYXMiLCJwX2NyZWFyX2NvbmZpZ19zbXMiLCJwX2NyZWFyX29yZ2FuaXphY2lvbiIsImFyX2xldmVsXzEiLCJwX2NyZWFyX3dlYmhvb2siLCJwX2NyZWFyX2NvbmZpZ19wcm92ZWVkb3IiLCJwX2FjdHVhbGl6YXJfcGxhbnRpbGxhIiwicF9lbGltaW5hcl91c3VhcmlvIiwicF9vYnRlbmVyX3RlbmFudHMiLCJwX2Vudmlhcl9lbWFpbCIsInBfYm9ycmFyX3BhcXVldGUiLCJwX2Vudmlhcl9zbXMiLCJwX29idGVuZXJfcHJvZHVjdG9zIiwicF9kZXNjYXJnYXJfY29udGFjdGxpc3QiLCJwX2VsaW1pbmFyX2FwaWtleSIsInJfY2FsaWRhZCIsInBfb2J0ZW5lcl9jb250YWN0bGlzdHMiLCJwX29idGVuZXJfYm90cHJvX2NvcnJlbGFjaW9uZXMiLCJwX2FjdHVhbGl6YXJfb3Ryb191c3VhcmlvIiwicF9hY3R1YWxpemFyX3dlYmhvb2siLCJzcl9zb3BfbHZsXzIiLCJwX2Vudmlhcl93aGF0c2FwcCIsInBfYWN0dWFsaXphcl9wYXF1ZXRlIiwicF9jcmVhcl90ZW5hbnQiLCJwX2NyZWFyX2JvdHByb19jb3JyZWxhY2lvbmVzIiwib2ZmbGluZV9hY2Nlc3MiLCJwX2FjdHVhbGl6YXJfY29uZmlnX3Byb3ZlZWRvciIsInBfY3JlYXJfdXN1YXJpbyIsImRlZmF1bHQtcm9sZXMtY2FtcGFpZ25lciIsInBfY3JlYXJfY29udGFjdGxpc3QiLCJwX2FjdHVhbGl6YXJfcHJvZHVjdG8iLCJwX2dyYWJhcl9sbGFtYWRhIiwicF9vYnRlbmVyX3VzdWFyaW9zIiwicF9kZXNjYXJnYXJfYXJjaGl2byIsInBfYWN0dWFsaXphcl9jb250YWN0bGlzdCIsInBfYm9ycmFyX2NhbXBhbmEiLCJwX3ZhbGlkYXJfb3RwIiwicF9hZG1pbl9vYnRlbmVyX3VzdWFyaW9zIiwicF9vYnRlbmVyX3dlYmhvb2tzIiwicF9hY3R1YWxpemFyX3RlbmFudCIsInBfY3JlYXJfbGltaXRlX3VzdWFyaW9fcGFxdWV0ZSIsInBfY3JlYXJfZmVjaGFzX2V4Y2x1aWRhcyIsInBfb2J0ZW5lcl9wcm92ZWVkb3JlcyIsInBfb2J0ZW5lcl9wbGFudGlsbGFzIiwicF9hY3R1YWxpemFyX2NhbXBhbmEiLCJwX3JlcG9ydGVfY29uc29saWRhZG8iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBvcmdhbml6YXRpb246KiBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRpbWV6b25lIjoiQW1lcmljYS9TYW50b19Eb21pbmdvIiwib3JnYW5pemF0aW9uIjp7InNlbmRpdV9ncm91cCI6eyJ0aW1lem9uZSI6WyJBbWVyaWNhL1NhbnRvX0RvbWluZ28iXSwiaWQiOiJiOWI4MWZkMS05N2ZhLTQ0ZDEtYWM2MC05ZjIwYjE0NjhjNGEifSwicHJ1ZWJhIjp7InRpbWV6b25lIjpbIkFtZXJpY2EvU2FudG9fRG9taW5nbyJdLCJpZCI6IjNlMTExMzgxLWQ0NTAtNGU4ZS05YzcwLTNhYThlZTIzYmI0YSJ9fSwibmFtZSI6IldpbHNvbiBHYXJjaWEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ3Z2FyY2lhIiwiZ2l2ZW5fbmFtZSI6IldpbHNvbiIsImZhbWlseV9uYW1lIjoiR2FyY2lhIiwiZW1haWwiOiJ3Z2FyY2lhQGJvdHByby5haSJ9.btuMm88LHC6-Cn_sLuhXyNGiByCIxG4W2G9bghQUb-1Xd3N8A73MZR7iJUpqAbnJV4SPVvKAveXtKNib_oQxvZxQr6Q1Fy5m10AmxZkqh12eftGVKVdRtCLZ70LU1Q1C7BW24dBrOIRRnkP-TZwEj9eSfcylqwBqwztonAXW_7OG703ecv2MCmzSz_U_tUknY65tLGlzrWciUbTfRE4H2v7iH3lFihoQHi7y7b5D3pDLgqMfurw-T6Zz-AhLUehHuHRgDfc3iZNVFODO8ONo6nXEZjIj3xBDM5IXHxx-6vzYndNF0JmvZZKfFNVFiXVksEGAu453bqbx115a5rq78Q`

    const tenant_id = "sendiu_group";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`,
                "x-tenant-id": tenant_id,
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (response.ok) {
            return responseData;
        } else {
            return {
                error: true,
                message: responseData?.message || "Error en la solicitud",
            };
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return {
            error: true,
            message: error?.message || "Error inesperado",
        };
    }
}
