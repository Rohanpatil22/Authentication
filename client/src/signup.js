import React from 'react';

function Signup() {
  return (
    <>
     <div className='bg-neutral-600 w-1/3 m-auto mt-10 align-center p-5 rounded-2xl'>
            <table className="w-3/5 m-auto">
                <tbody>
                    <tr>
                        <td className='p-4 text-white text-xl'>Name</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className='p-4 text-white text-xl'>Mob no</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td className='p-4 text-white text-xl'>Email</td>
                        <td><input type="email" /></td>
                    </tr>
                    <tr>
                        <td className='p-4 text-white text-xl'>Password</td>
                        <td><input type="password" /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" className='text-center pt-6' ><button className='text-xl bg-teal-700 p-2 w-24  rounded-xl text-white'>Submit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  );
}

export default Signup;